import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private apiUrl = 'http://laravelapi.tescik.ovh/users';

    constructor(private httpClient: HttpClient){ }
    
    public getApiUsers(){
        
        return this.httpClient.get<User[]>(this.apiUrl).pipe(
            map( res => {
                return res.map( item => {
                    return new User(item['id'],item['email'],item['first_name'],item['last_name'],item['avatar']); 
                })
            })
        );
        
    }
    
}
