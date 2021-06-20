import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AnalyticsComponent } from './analytics/analytics.component'
import { DocsComponent } from './docs/docs.component'
import { EventsComponent } from './events/events.component'
import { HelpCenterComponent } from './help-center/help-center.component'
import { PricingComponent } from './pricing/pricing.component'
import { SecurityComponent } from './security/security.component'

const routes: Routes = [
  {path: "analytics", component: AnalyticsComponent, data: {routeDisplayName: "Analytics"}},
  {path: "docs", component: DocsComponent, data: {routeDisplayName: "Docs"}},
  {path: "events", component: EventsComponent, data: {routeDisplayName: "Events"}},
  {path: "help-center", component: HelpCenterComponent, data: {routeDisplayName: "Help Center"}},
  {path: "pricing", component: PricingComponent, data: {routeDisplayName: "Pricing"}},
  {path: "security", component: SecurityComponent, data: {routeDisplayName: "Security"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
