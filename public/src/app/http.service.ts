import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { 
    // this.getRecipe();
  }
  getRecipe(){
    console.log("FROM SERVICE: getRecipe()")
    return this._httpClient.get('/api/unirest/recipes');
  }
  getJoke(){
    return this._httpClient.get('api/unirest/recipes/joke');
  }
  getIngredients(first: string, second: string){
    console.log("FROM SERVICE: getIngredients()")
    return this._httpClient.get(`/api/unirest/recipes/result/${first}/${second}`);
  }

  singleRecipe(id: string){
    console.log("FROM SERVICE: singleRecipe()")
    return this._httpClient.get(`/api/unirest/recipes/${id}`)
  }

  similarRecipe(id: string){
    console.log("FROM SERVICE: singleRecipe()")
    return this._httpClient.get(`/api/unirest/recipes/similar/${id}`)
  }

  createRecipes(newRecipe: any){ //expecting a new Recipe
    console.log("FROM SERVICE: createRecipes")
    return this._httpClient.post('/api/unirest/recipes', newRecipe); //sending the newRecipe here
  }

  allRecipes(){
    return this._httpClient.get('/api/recipes');
  }

  // resultRecipes(){
  //   return this._httpClient.get(`/api/unirest/recipes/${first}/${second}`)
  // }





}


