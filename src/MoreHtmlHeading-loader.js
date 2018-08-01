(function loadComponentUsingFeatureDetection(win,doc) {
  var hasCes = 'customElements' in window && window.customElements.define;
  if (hasCes) {
    var s = doc.documentElement;
    s = s.insertBefore(doc.createElement('script'), s.lastChild);
    s.defer = false;
    s.type = 'module';
    s.src = '../src/MoreHtmlHeading.js';
  }
}(window,document));