import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  oneRecipe: any;
  newRecipe: any;
  errors = [];
  oneJoke: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getRecipe();
    this.newRecipe = {firstIngredient: "", secondIngredient: ""};
    this.getJoke();
  }

  getRecipe(){
    let obs = this._httpService.getRecipe();
      obs.subscribe(data =>{
        this.oneRecipe = data;
        console.log(data)
      })
  }
  createRecipe(){
    console.log("ADD Component: createRecipe()")
    console.log(this.newRecipe.firstIngredient)
    this._httpService.createRecipes(this.newRecipe).subscribe(data =>{
      this._router.navigate(['/recipes/result', this.newRecipe.firstIngredient, this.newRecipe.secondIngredient]);
    })
  }
  getJoke(){
    let obs = this._httpService.getJoke();
      obs.subscribe(data=>{
        console.log(data);
        this.oneJoke = data;
      })
  }
}
