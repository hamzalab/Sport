import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
    loginEmail: ['',[ Validators.email, Validators.required]],
    loginPwd:  ['', Validators.required]
  });

}

login(){
  alert('login clicked')
}
}
