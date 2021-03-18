import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepoService {
  data  : any;
  key   : any;
  constructor(
    private  httpc: HttpClient) {
  }

  getAllRepoService(param) {
    return this.httpc.get('https://api.github.com/users/'+param+'/repos')
  }


}
