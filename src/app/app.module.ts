import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NgBlogElementComponent } from './ng-blog-element/ng-blog-element.component';

@NgModule({
  declarations: [
    NgBlogElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [
    NgBlogElementComponent
  ],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(NgBlogElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('blog-preview', el);
  }
}
