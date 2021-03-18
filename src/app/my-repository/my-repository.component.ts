import { Component, OnInit }      from '@angular/core';
import { RepoService }            from '../../services/repo.service'
import { Router, ActivatedRoute}  from "@angular/router";
import { PageChangedEvent }       from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-my-repository',
  templateUrl: './my-repository.component.html',
  styleUrls: ['./my-repository.component.scss']
})
export class MyRepositoryComponent implements OnInit {
  parameterData : any;
  repoData      : any;
  returnedArray = []

  constructor(
    private Repo                : RepoService,
    private Router              : Router,
    private activatedRoute      : ActivatedRoute
  ) { }

  async ngOnInit() {  
    this.activatedRoute.queryParams
    .subscribe(async data =>{
      try {
        this.parameterData    = data
        this.repoData = await this.getRepoUser(this.parameterData.username)
        this.returnedArray = this.repoData.slice(0, 10);
      } catch(error) {}
    })
  }

  getRepoUser(param) {
    return new Promise((resolve, reject) => {
      this.Repo.getAllRepoService(param)
      .subscribe(data =>{
        resolve(data) 
      })
    })
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.repoData.slice(startItem, endItem);
  }

  backToProfile() {
    this.Router.navigate(['/profile-page'], { queryParams: { username : this.parameterData.username } })
  }
}
