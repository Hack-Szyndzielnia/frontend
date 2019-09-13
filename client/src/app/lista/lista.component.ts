import {Component, OnInit} from '@angular/core';
import { UsersService } from '../services/users.service'; 
import { User } from "../models/user.model";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
    
    public userList : User[];
    
    constructor(private users : UsersService) {}
    
    ngOnInit() {
        
        this.users.getApiUsers().subscribe( res => { 
            this.userList = res; 
            console.log(res) 
        });
        
    }

}
