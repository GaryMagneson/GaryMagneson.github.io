import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test',
                    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp'),
    new Recipe('A Test Recipe 2', 'This is a Test too',
    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp')

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
