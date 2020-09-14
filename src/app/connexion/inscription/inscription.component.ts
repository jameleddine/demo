import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
myform:FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)]),
    })
  }
  register(){
    console.log(this.myform.value)
    localStorage.setItem('user',JSON.stringify({email:this.myform.value.email,password:this.myform.value.password}))
    this.router.navigate(['/'])
  }

}
