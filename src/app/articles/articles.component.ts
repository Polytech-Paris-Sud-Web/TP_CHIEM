import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  articles : Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }


  ngOnInit() {
    this.get();
  }

  private get(): void {
    this.articleService.getAll().subscribe((articles) => {
      this.articles = articles;
    });
  }

  delete(article: Article): void {
    if (article.id) {
      this.articleService.delete(article.id!).subscribe(() => {
        this.get();
      });
    }
  }

  create(article: Article): void {
    this.articleService.add(article).subscribe(() => {
      this.get();
    });
  }


}
