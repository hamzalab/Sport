import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
users:any;
  constructor(
     private userService:UserService,
     private router:Router
  ) { }

  ngOnInit() { 
    this.userService.getAllUsers().subscribe(
      gettedUsers =>{
        this.users=gettedUsers;
      }
    )
  }
 deleteUser(id:number) {
   this.userService.deleteUser(id).subscribe(
     ()=>{
       this.userService.getAllUsers().subscribe(
         x=>{
           this.users=x;
         }
       )
     }
   )
 } 
goToDisplayUser(id:number){
  this.router.navigate([`display-user/${id}`]);
} 
goToEditUser(id:number) {
  this.router.navigate([`edit-user/${id}`]);
}
}
