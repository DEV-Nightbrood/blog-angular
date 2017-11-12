import { News } from './news';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }

  getConfiguration = (): Observable<News[]> => {
    console.log('In getConfiguration of ConfigurationService');
    return this.http.get('http://localhost:3000/news').map(res => res.json());
  }
}
