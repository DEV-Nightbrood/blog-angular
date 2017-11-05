import {MenuItemComponent} from './menu-item.component';
import {Injectable} from '@angular/core';

const Items: MenuItemComponent[] = [
  new MenuItemComponent('Blog', true),
  new MenuItemComponent('Accueil', false)
];



@Injectable()
export class MenuItemService {
  getItems(): MenuItemComponent[] {

    return Items;

  }
}
