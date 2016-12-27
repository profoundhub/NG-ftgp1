Import { NgModule } from '@angular/core';
Import { BrowserModule } from '@angular/platform-browser';
Import { QuoteService } from './quote.service';
Import { RandomQuoteComponent } from './random-quote.component';
Import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, RandomQuoteComponent ],
  providers: [ QuoteService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }