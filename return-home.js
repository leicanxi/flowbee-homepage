(function () {
  'use strict';

  // NewAPI's header brand link is the only home link with this accessible name.
  // Do not match the ordinary navigation item whose visible text is "主页".
  var brandLinkSelector = 'a[aria-label="返回主页"][href="/"]';

  document.addEventListener(
    'click',
    function (event) {
      var target = event.target;
      var link = target && target.closest && target.closest(brandLinkSelector);
      if (!link || !document.documentElement.contains(link)) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign('https://flowbee.top/');
    },
    true
  );
})();
