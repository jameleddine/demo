import { Component, OnInit } from '@angular/core';
import { User } from '../../entites/user.entity';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';



const NATIONNALITE = [
  {title:"Tunisie",region:["Bierte","Nabeul","Ariana"]},
  {title:"France",region:["Lyon","Paris","Marseille"]},
  {title:"Espagne",region:["Madrid","Barcelone","seville"]}
]
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[CrudService]
})
export class AjoutComponent implements OnInit {
 nationnalte = NATIONNALITE;
 user:User = new User();
  constructor(private crud : CrudService, private route:Router) { }

  ngOnInit() {
  }
  save(){
    console.log(this.user);
    this.crud.createNewUser(this.user).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/']);
    },
    err=>{console.log(err)}
    )
    
  }
}
