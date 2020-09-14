import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  title:string = "hello";
  state:boolean = true;
  count:number = 0;
  chiffre:number = 100;
  name:string;
  email:string;
  phone:string;
  about:string;

  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 users:any = JSON.parse(localStorage.getItem('users')) || [];
 user:any = {};
  constructor() {
    console.log("constructor")
   }
   ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
  ngOnInit() {
    console.log("oninit")
  }
  
 
  callFn(){
    alert(this.chiffre);
  }
  decrement(){
    this.count --
  }
  increment(){
    this.count ++
  }
  callTitle(){
    alert(this.title)
  }
  saveForm(){
    let data = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      about:this.about
    }
    this.users.push(data)
    localStorage.setItem('users',JSON.stringify(this.users))
    console.log(this.users);
  }
  detail(user){
    this.user = user;
  }

}
