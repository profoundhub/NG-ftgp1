"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NgModule = ng.core.NgModule;
var BrowserModule = ng.platformBrowser.BrowserModule;
var QuoteService = app.QuoteService;
var RandomQuoteComponent = app.RandomQuoteComponent;
var AppComponent = app.AppComponent;

var AppModule = exports.AppModule = (_dec = NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomQuoteComponent],
  providers: [QuoteService],
  bootstrap: [AppComponent]
}), _dec(_class = function AppModule() {
  _classCallCheck(this, AppModule);
}) || _class);