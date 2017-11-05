import {Component} from '@angular/core';
import {MenuItemComponent} from './menu-item.component';
import {MenuItemService} from './menu-item.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../resources/scss/menu.component.scss']
})



export class AppMenuComponent {
  constructor(private menuItemService: MenuItemService) {
    this.items = this.menuItemService.getItems();

  }

  title = 'My Blog';
  items: MenuItemComponent[];

}
