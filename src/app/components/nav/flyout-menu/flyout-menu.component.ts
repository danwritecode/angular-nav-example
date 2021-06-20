import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../nav-item'

@Component({
  selector: 'app-flyout-menu',
  templateUrl: './flyout-menu.component.html',
  styleUrls: ['./flyout-menu.component.css']
})
export class FlyoutMenuComponent implements OnInit {
  @Input() navItem!: NavItem

  constructor() { }

  ngOnInit(): void {
  }

}
