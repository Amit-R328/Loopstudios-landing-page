import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LeaderComponent } from './leader/leader.component';
import { CreationsComponent } from './creations/creations.component';
import { FooterComponent } from './footer/footer.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    LeaderComponent,
    CreationsComponent,
    FooterComponent,
    NavMobileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
