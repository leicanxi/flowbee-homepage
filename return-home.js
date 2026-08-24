(function () {
  'use strict';

  // NewAPI uses two different header structures. Both checks require the
  // logo-and-FlowBee brand treatment; ordinary "主页" links do not qualify.
  var appBrandSelector = 'a[aria-label="返回主页"][href="/"]';

  function isBrandLink(link) {
    if (!link || link.tagName !== 'A') return false;
    if (link.matches(appBrandSelector)) return true;
    if (link.getAttribute('href') !== '/' || link.textContent.trim() !== 'FlowBee') {
      return false;
    }
    return Boolean(link.querySelector(':scope > div > img[alt="logo"]'));
  }

  document.addEventListener(
    'click',
    function (event) {
      var target = event.target;
      var link = target && target.closest && target.closest('a[href="/"]');
      if (!isBrandLink(link) || !document.documentElement.contains(link)) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign('https://flowbee.top/');
    },
    true
  );
})();
