import {News} from './news';
import {NewsService} from './newsservice.service';
import {Component} from '@angular/core';





@Component({
  selector: 'app-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['../resources/scss/news.component.scss']
})



export class AppListNewsComponent {

  list: News[];

  constructor(private service: NewsService) {

    this.service.getConfiguration()
      .subscribe(
      list => {
        this.list = list;
        console.log('Recupération des news dans le compnent nb elements : ' + list.length);

  

      },
      (error) => console.log('Impossible de récupérer les news : ' + error),
      () => console.log('Impossible de récupérer les news')
      );


  }

}
