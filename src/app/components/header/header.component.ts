import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   dateNow:Date; 
   name:string='Hamza';
  constructor(

  ) { }

  ngOnInit() { 
    this.dateNow=new Date();
  }
  formatDate() { 

  }
}
