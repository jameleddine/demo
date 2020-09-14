import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
  users:any = [];
  spinner=false;
  constructor(private crud:CrudService, private route:Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.spinner = true;
    this.crud.getAllUsers().subscribe(res=>{
      this.users = res;
      this.spinner = false;
    })
  }
  delete(user){
    this.spinner = true;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crud.deleteUserById(user.id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Deleted!',
            'Your user has been deleted.',
            'success'
          )
          this.getAll();
          
        })
       
      }
    })
    this.spinner = false;
  }

  edit(user){
    this.route.navigate(['home/gestion',user.id])
  }

}
