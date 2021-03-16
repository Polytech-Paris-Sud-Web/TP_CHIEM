import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from "../article.service";
import { Router } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})

export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  createArticle(): void{

    const newArticle : Article = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      author: this.articleForm.value.author
    };
    this.articleService.add(newArticle).subscribe(() => {
      this.router.navigateByUrl('/');
    });


  }

}
