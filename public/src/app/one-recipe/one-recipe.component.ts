import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent implements OnInit {
  recipe: any;
  similarRecipe: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(data => { //i'm going to subscribe to route parameters and when the data comes in, i'm going to save whatever the object is, in data. and i'm going to access that data at id.
    console.log(data['id']); //here i'm console log the actually data which is ID
    this._httpService.singleRecipe(data['id']).subscribe(single => { //what comes back, we refer it to single and set this.product to be the thing that comes back
      this.recipe = single;
    })
    this._httpService.similarRecipe(data['id']).subscribe(single => { //what comes back, we refer it to single and set this.product to be the thing that comes back
      this.similarRecipe = single;
    })
    })
  }

}
