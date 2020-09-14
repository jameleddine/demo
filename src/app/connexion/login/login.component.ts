import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user.email == this.email && user.password == this.password){
      this.router.navigate(['/home'])
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }
}
