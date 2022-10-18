import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test',
                    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp'),
    new Recipe('A Test Recipe', 'This is a Test too',
    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
