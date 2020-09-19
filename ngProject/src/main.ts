import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  //meta data
  selector: 'app-start',
  template: '<h1>Hello World...</h1>',
})
class FirstComponent {}

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
class FirstModule {}

platformBrowserDynamic().bootstrapModule(FirstModule);
