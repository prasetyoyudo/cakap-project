import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
        FormGroup, 
        Validators }          from '@angular/forms';
import { UsersService }       from '../../services/users.service'
import { Router }             from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm         : FormGroup;
  username          : any

  constructor(
    private fb      : FormBuilder,
    private Users   : UsersService,
    private Router  : Router,
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.loginForm  = this.fb.group({
      'username'                         : ['', Validators.required],
    })
  }

  submitLogin(data) {
    let param = data.username
    this.Users.getUserByUsernameService(param)
      .subscribe(data => {
        this.username = data
        this.Router.navigate(['/profile-page'] ,{ queryParams: { username : this.username.login } } );
      })
  }
}
