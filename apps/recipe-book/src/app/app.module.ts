import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServersModule } from '@learn/servers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServersModule],
  providers: [],
  /**
   * ? The `bootstrap` property should only every be used in the root module of our application. This tells angular what components are required to bootstrap our application.
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
