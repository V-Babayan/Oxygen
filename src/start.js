(function () {
  const modes = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
  };

  const getCurrentMode = () => {
    const hostname = window.location.hostname;

    if (!hostname || hostname === 'localhost') {
      return modes.DEVELOPMENT;
    } else {
      return modes.PRODUCTION;
    }
  };

  const mode = getCurrentMode();

  if (mode === modes.DEVELOPMENT) {
    console.log('Mode development.');
  }
})();
