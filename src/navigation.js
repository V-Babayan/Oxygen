(function () {
  const KEYWORDS = [
    'home',
    'about',
    'portfolio',
    'team',
    'pricing',
    'contact',
    'top',
  ];

  const createLink = (key) => {
    return document.querySelector('#link_' + key);
  };

  const createRoute = (key) => {
    return document.querySelector('#route_' + key);
  };

  const scrollToRoute = (link, route) => {
    link.addEventListener('click', () => {
      route.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  };

  KEYWORDS.forEach((key) => {
    const link = createLink(key);
    const route = createRoute(key);

    scrollToRoute(link, route);
  });
})();
