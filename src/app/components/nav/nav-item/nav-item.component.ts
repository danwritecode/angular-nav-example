import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../nav-item'

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navItem!: NavItem
  @Input() currentOpenedFlyout!: String
  @Output() navItemClick = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    console.log(this.navItem)
  }

  onNavClick(navItem: string) {
    this.navItemClick.emit(navItem)
  }

}
