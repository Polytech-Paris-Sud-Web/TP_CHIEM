import { Injectable } from '@angular/core';
import {Article} from "./models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  constructor(private http : HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/articles');
  }

  public get(id: number): Observable<Article>{
    return this.http.get<Article>('http://localhost:3000/articles/' + id);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/articles/' + id);
  }

  public add(newArticle: Article): Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(newArticle);
    return this.http.post('http://localhost:3000/articles/', body, {'headers': headers});
  }
}
