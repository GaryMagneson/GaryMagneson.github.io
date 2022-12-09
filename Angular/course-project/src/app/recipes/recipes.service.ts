import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
                    'This is a Test',
                    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp'
                    , [
                        new Ingredient('bread', 1)
                        , new Ingredient('egg', 6)
                    ]
                    ),
        new Recipe('A Test Recipe 2', 
                    'This is a Test too',
                    'https://insanelygoodrecipes.com/wp-content/uploads/2021/08/French-Toast-with-Berries-and-Butter-683x1024.webp'
                    , [
                        new Ingredient('Cinnamon', 1)
                        , new Ingredient('Cream Cheese', 1)
                    ]
                    )
    
    ];

    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}