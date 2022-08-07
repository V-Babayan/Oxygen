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

  if (mode === modes.PRODUCTION) {
    console.log('Please ignore all error messages');
  } else {
    // ! if you are created new script file, please do not forget add script file name to this array.
    // ! this is a for local testing the app.
    const SCRIPT_URLS = ['start', 'navigation'];

    const elements = {
      CSS: document.querySelector('#css-href-id'),
      IMAGES: document.querySelectorAll('img'),
    };

    elements.CSS.href = elements.CSS.href.replace('src', '.');
    elements.IMAGES.forEach((image) => {
      image.src = image.src.replace('src', '.');
    });

    SCRIPT_URLS.forEach((url) => {
      const script = document.createElement('script');

      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', './' + url + '.js');

      document.body.appendChild(script);
    });
  }
})();
