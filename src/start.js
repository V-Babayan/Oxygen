document.addEventListener('DOMContentLoaded', () => {
  const isProduction = !!window.location.hostname;

  if (isProduction) {
    console.log('Starting a development');
    console.log('DOM fully loaded and parsed');
  }
});
