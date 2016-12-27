'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

  var Component = ng.core.Component;

  var AppComponent = function AppComponent() {
    _classCallCheck(this, AppComponent);
  };

  app.AppComponent = Component({
    selector: 'my-app',
    template: '\n      <h1>Random Quotes</h1>\n      <random-quote></random-quote>\n    '
  })(AppComponent);
})(window.app || (window.app = {}));