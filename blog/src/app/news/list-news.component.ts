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

    this.service.getConfiguration().subscribe(
      (resultat) => {
        console.log('R�sultat des news : ' + resultat);
      },
      (error) => console.log('Impossible de r�cup�rer les news : ' + error),
      () =>  console.log('Impossible de r�cup�rer les news')
    );


  }




}
