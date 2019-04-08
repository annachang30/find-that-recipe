import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultRecipe: any;
  paramsOne: any;
  paramsTwo: any;
  moreRecipe: any;
  visible: boolean;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.visible = true;
    this._route.params.subscribe((params:Params) => { //i'm going to subscribe to route parameters and when the data comes in, i'm going to save whatever the object is, in data. and i'm going to access that data at id.
      console.log(params["first"]); //here i'm console log the actually data which is ID
      this.paramsOne = params["first"];
      this.paramsTwo = params["second"];
      this.fiveRecipes(this.paramsOne, this.paramsTwo);
    })
  }

  fiveRecipes(paramsOne, paramsTwo){
    this._httpService.getIngredients(paramsOne, paramsTwo).subscribe(twoIng =>{
      console.log("Hello" + twoIng)
      this.resultRecipe = twoIng;
      // this.resultRecipeOne = twoIng.splice;
    })
  }
  showMoreClick(){
    console.log("I'm clicked")
    this.visible = false;
    this._route.params.subscribe((params:Params) => { //i'm going to subscribe to route parameters and when the data comes in, i'm going to save whatever the object is, in data. and i'm going to access that data at id.
      console.log(params["first"]); //here i'm console log the actually data which is ID
      this.paramsOne = params["first"];
      this.paramsTwo = params["second"];
      this.showMoreRecipes(this.paramsOne, this.paramsTwo);
    })
  }
  showMoreRecipes(paramsOne, paramsTwo){
    this._httpService.getIngredients(paramsOne, paramsTwo).subscribe(twoIng =>{
      console.log("Hello" + twoIng)
      this.moreRecipe = twoIng;
    })
  }
}
