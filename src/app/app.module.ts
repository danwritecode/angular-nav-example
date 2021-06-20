import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PricingComponent } from './pricing/pricing.component';
import { DocsComponent } from './docs/docs.component';
import { SecurityComponent } from './security/security.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { EventsComponent } from './events/events.component';
import { NavItemComponent } from './components/nav/nav-item/nav-item.component';
import { FlyoutMenuComponent } from './components/nav/flyout-menu/flyout-menu.component';
import { FlyoutMenuItemComponent } from './components/nav/flyout-menu-item/flyout-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnalyticsComponent,
    PricingComponent,
    DocsComponent,
    SecurityComponent,
    HelpCenterComponent,
    EventsComponent,
    NavItemComponent,
    FlyoutMenuComponent,
    FlyoutMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
