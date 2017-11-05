import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppMenuComponent} from './menu/menu.component';

import {AppComponent} from './app.component';
import {MenuItemService} from './menu/menu-item.service';
import { AppListNewsComponent } from './news/list-news.component';
import {NewsService} from './news/newsservice.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppListNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MenuItemService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
