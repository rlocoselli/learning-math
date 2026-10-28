(() => {
  const state = { loginConfigured: false, aiConfigured: false, authenticated: false, accountId: null };

  function publish() {
    window.dispatchEvent(new CustomEvent('math-auth-state', { detail: { ...state } }));
  }

  async function refresh() {
    try {
      const [configResponse, sessionResponse] = await Promise.all([
        fetch('/api/config', { credentials: 'same-origin' }),
        fetch('/api/session', { credentials: 'same-origin' }),
      ]);
      if (!configResponse.ok || !sessionResponse.ok) throw new Error('Unable to load account state');
      const config = await configResponse.json();
      const session = await sessionResponse.json();
      state.loginConfigured = config.loginConfigured === true;
      state.aiConfigured = config.aiConfigured === true;
      state.authenticated = session.authenticated === true;
      state.accountId = typeof session.accountId === 'string' ? session.accountId : null;
    } catch (error) {
      state.loginConfigured = false;
      state.aiConfigured = false;
      state.authenticated = false;
      state.accountId = null;
    }
    publish();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('authButton');
    if (button) {
      button.addEventListener('click', async () => {
        if (!state.authenticated) {
          if (state.loginConfigured) window.location.assign('/auth/login');
          return;
        }
        button.disabled = true;
        try {
          await fetch('/auth/logout', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: '{}',
          });
        } finally {
          state.authenticated = false;
          state.accountId = null;
          button.disabled = false;
          publish();
        }
      });
    }
    refresh();
  });

  window.MathAuth = { refresh, getState: () => ({ ...state }) };
})();
