import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },

  { state: 'users', type: 'link', name: 'User', icon: 'people_alt' }

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
