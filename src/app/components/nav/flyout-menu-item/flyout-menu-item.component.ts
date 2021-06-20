import { Component, OnInit, Input } from '@angular/core';
import { FlyoutMenuItem } from '../nav-item'

@Component({
  selector: 'app-flyout-menu-item',
  templateUrl: './flyout-menu-item.component.html',
  styleUrls: ['./flyout-menu-item.component.css']
})
export class FlyoutMenuItemComponent implements OnInit {
  @Input() flyoutMenuItem!: FlyoutMenuItem

  constructor() { }

  ngOnInit(): void {
  }

}
