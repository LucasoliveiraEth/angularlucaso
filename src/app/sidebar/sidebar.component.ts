import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
  { path: '/user',          title: 'Perfil',      icon:'nc-single-02',  class: '' }
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] | undefined;
  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
