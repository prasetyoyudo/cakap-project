import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  data  : any;
  key   : any;
  constructor(
    private  httpc: HttpClient) {
  }

  getUserByUsernameService(param) {
    return this.httpc.get('https://api.github.com/users/'+param)
  }


}
