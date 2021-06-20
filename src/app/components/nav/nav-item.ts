export interface NavItem {
  nav_item_name: string,
  flyout?:Array<FlyoutMenuItem>,
  nav_item_route?:string
}

export interface FlyoutMenuItem {
  flyout_item_name: string,
  flyout_item_route: string
}
