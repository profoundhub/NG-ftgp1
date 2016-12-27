'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

  var RandomQuoteComponent = function RandomQuoteComponent() {
    _classCallCheck(this, RandomQuoteComponent);
  };

  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  }).Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
      var _this = this;

      quoteService.generateRandomQuotes(2000, function (quote) {
        return _this.quote = quote;
      });
    }]
  });

  app.RandomQuoteComponent = RandomQuoteComponent;
})(window.app || (window.app = {}));