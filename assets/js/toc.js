// Highlights the section you are reading in the "On this page" list. No tracking, no third parties.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var headings = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function activate(id) {
    links.forEach(function (a) { a.classList.toggle('active', a === byId[id]); });
  }

  var visible = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    for (var i = 0; i < headings.length; i++) {
      if (visible[headings[i].id]) { activate(headings[i].id); return; }
    }
  }, { rootMargin: '-90px 0px -65% 0px' });

  headings.forEach(function (h) { observer.observe(h); });
  activate(headings[0].id);
})();
