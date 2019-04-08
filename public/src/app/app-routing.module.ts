import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'recipes', component: MainComponent },
  {path: 'recipes/new', component: AddComponent },
  {path: 'recipes/:id', component: OneRecipeComponent },
  {path: 'recipes/result/:first/:second', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
