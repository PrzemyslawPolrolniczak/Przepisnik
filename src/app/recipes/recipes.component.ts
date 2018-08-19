import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../shared/menu/menu-interface';
import { RecipeInterface } from './recipe-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  showOnly: string;
  menuOptions: MenuInterface[] = [
    {
      id: 0,
      name: 'Przepisy z aplikacji',
      data: 'creator',
      active: false
    },
    {
      id: 1,
      name: 'Przepisy z interetu',
      data: 'database',
      active: false
    },
    {
      id: 2,
      name: 'Moje przepisy',
      data: 'database',
      active: false
    },
    {
      id: 3,
      name: 'Ulubione przepisy',
      data: 'database',
      active: false
    },
    {
      id: 4,
      name: 'Wszystkie przepisy',
      data: 'database',
      active: false
    }
  ]

  hardcodedRecipes: RecipeInterface[] = [
    {
      id: 0,
      name: 'Jajecznica',
      description: 'Zwykła jajecznica z szynką',
      ingredients: {
        'szynka' : '2 plasterki',
        'jajka' : '3 sztuki'
      }
    },
    {
      id: 1,
      name: 'Jajecznica',
      description: 'Zwykła jajecznica z szynką',
      ingredients: {
        'szynka' : '2 plasterki',
        'jajka' : '3 sztuki'
      }
    },
    {
      id: 2,
      name: 'Jajecznica',
      description: 'Zwykła jajecznica z szynką',
      ingredients: {
        'szynka' : '2 plasterki',
        'jajka' : '3 sztuki'
      }
    },
    {
      id: 2,
      name: 'Jajecznica',
      description: 'Zwykła jajecznica z szynką',
      ingredients: {
        'szynka' : '2 plasterki',
        'jajka' : '3 sztuki'
      }
    },
    {
      id: 2,
      name: 'Jajecznica',
      description: 'Zwykła jajecznica z szynką',
      ingredients: {
        'szynka' : '2 plasterki',
        'jajka' : '3 sztuki'
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeEvent(e :string):void {
    this.showOnly = e;
  }

}
