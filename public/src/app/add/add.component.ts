import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newRecipe: any;
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRecipe = {firstIngredient: "", secondIngredient: ""};
  }
  createRecipe(){
    console.log("ADD Component: createRecipe()")
    console.log(this.newRecipe.firstIngredient)
    this._httpService.createRecipes(this.newRecipe).subscribe(data =>{
      this._router.navigate(['/recipes/result', this.newRecipe.firstIngredient, this.newRecipe.secondIngredient]);
    })
  }
  // createRecipe(){ // no need to send newRecipe to the function because you have newRecipe: any: attribute that is available for the entire class
  //   console.log("ADD COMPONENT")
  //   this._httpService.createRecipes(this.newRecipe).subscribe(data =>{ //expecting a this.newRecipe and subscribe and take in data.  
  //     console.log("add component:" + data); //data here is an error or a ride json because that's what we set up
  //     if(data['errors']){
  //       for(var key in data['errors']){
  //         this.errors.push(data['errors'][key]['message']);
  //       }
  //     }
  //     else{
  //       this.newRecipe = {title: "", price: "", imageUrl: ""}
  //       this._router.navigate(['/recipes/result/first/bacon']);
  //     }
  //   })
  // }
}
