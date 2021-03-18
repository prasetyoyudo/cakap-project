import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyRepositoryComponent } from './my-repository/my-repository.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent,
    data: {
      title: 'Error Page'
    },
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'profile-page',
    component: ProfilePageComponent,
    data: {
      title: 'Profile-page'
    },
  },
  {
    path: 'repository',
    component: MyRepositoryComponent,
    data: {
      title: 'My Component'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
