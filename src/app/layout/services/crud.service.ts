import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = "http://localhost:3000/users/" 
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.apiUrl);
  }
  getUserById(id){
    return this.http.get(this.apiUrl+id);
  }
  createNewUser(user){
    return this.http.post(this.apiUrl,user);
  }
  updateUserById(id,data){
    return this.http.put(this.apiUrl+id,data);
  }
  deleteUserById(id){
    return this.http.delete(this.apiUrl+id);
  }


}
