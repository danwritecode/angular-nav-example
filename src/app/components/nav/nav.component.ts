import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showSolutionsFlyout = false;
  showMoreFlyout = false;
  currentOpenedFlyout = ''

  navItems: NavItem[] = [
    {nav_item_name: 'Solutions', flyout: [{flyout_item_name: 'Analytics', flyout_item_route: 'analytics'}, {flyout_item_name: 'Security', flyout_item_route: 'security'}]},
    {nav_item_name: 'Pricing', nav_item_route: 'pricing'},
    {nav_item_name: 'Docs', nav_item_route: 'docs'},
    {nav_item_name: 'More', flyout: [{flyout_item_name: 'Help Center', flyout_item_route: 'help-center'}, {flyout_item_name: 'Events', flyout_item_route: 'events'}]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(navItem: string) {
    if(!this.currentOpenedFlyout) {
      this.currentOpenedFlyout = navItem
    } else if(this.currentOpenedFlyout === navItem) {
      this.currentOpenedFlyout = ''
    } else {
      this.currentOpenedFlyout = ''
      this.currentOpenedFlyout = navItem
    }
  }

}
