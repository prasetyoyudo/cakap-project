import { Component, OnInit } from '@angular/core';
import { UsersService }       from '../../services/users.service'
import { Router, ActivatedRoute}  from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userData  : any;
  parameterData  : any;

  constructor(
    private Users               : UsersService,
    private Router              : Router,
    private activatedRoute      : ActivatedRoute
  ) { }

  async ngOnInit( ) {

    this.activatedRoute.queryParams
    .subscribe(async data =>{
      try {
        this.parameterData = data
        this.userData =  await this.getUserByUsername(this.parameterData.username)
      } catch(error) {

      }

    })
  }

  async getUserByUsername(param) {
    return new Promise((resolve, reject) => {
      this.Users.getUserByUsernameService(param)
      .subscribe(data =>{
        resolve(data) 
      })
    })
  }

  backToLogin() {
    this.Router.navigate([''])
  }

  goToMyRepo() {
    this.Router.navigate(['/repository'] ,{ queryParams: { username : this.parameterData.username } } );
  }

}
