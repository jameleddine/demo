import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { User } from '../../entites/user.entity';

const NATIONNALITE = [
  {title:"Tunisie",region:["Bierte","Nabeul","Ariana"]},
  {title:"France",region:["Lyon","Paris","Marseille"]},
  {title:"Espagne",region:["Madrid","Barcelone","seville"]}
]
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers:[CrudService]
})
export class GestionComponent implements OnInit {
nationnalte = NATIONNALITE;
idUser:any;
user:User = new User();
  constructor(private current : ActivatedRoute, private crud:CrudService, private route:Router) {
    this.current.params.subscribe(res=>{
      console.log(res);
      this.idUser = res.id;
    })
   }

  ngOnInit() {
    this.crud.getUserById(this.idUser).subscribe(res=>{
      console.log(res);
      this.user = <User>res;
    })
  }
  update(){
    this.crud.updateUserById(this.idUser,this.user).subscribe(res=>{
      this.route.navigate(['/home']);
    })
  }

}
