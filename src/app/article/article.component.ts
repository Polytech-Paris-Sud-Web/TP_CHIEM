import {Component, Input, Output, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { EventEmitter } from '@angular/core';
import {ArticleService} from "../article.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  @Input()
  article: Article | undefined;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private route: Router, private articleService : ArticleService) {

  }

  ngOnInit() {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  show(): void{
    if (this.article) {
      this.route.navigateByUrl('/article/' + this.article.id);
    }
  }
}
