import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {ProjectPageComponent} from "./page/project-page/project-page.component";
import {ChronoPageComponent} from "./page/chrono-page/chrono-page.component";
import {CountriesPageComponent} from "./page/countries-page/countries-page.component";
import {WebPageComponent} from "./layout/web-page/web-page.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AdminPageComponent} from "./layout/admin-page/admin-page.component";
import {
  AuthenticationLayoutComponent
} from "./layout/authentication.layout/authentication/authentication-layout/authentication-layout.component";
import {WorkDirectorLayoutComponent} from "./layout/work-director.layout/work-director.layout.component";

const routes: Routes = [
  //  { path: '', component: WebPageComponent },
  // { path: 'project', component: ProjectPageComponent },
  // {path: 'about-us', component:ChronoPageComponent },
  // { path: 'countries', component:  CountriesPageComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '',
    component: WebPageComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./layout/web-page/web-page.module').then(m => m.WebPageModule)
      }
    ]
  },



  {
    path:'',
    component: AdminPageComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./layout/admin-page/admin-page.module').then(m=>m.AdminPageModule),

      }
    ]

  },
  {
    path:'',
    component: AuthenticationLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./layout/authentication.layout/authentication/authentication.module').then(m=>m.AuthenticationModule),
      }
    ]
  },
  {
    path: '',
    component : WorkDirectorLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./layout/work-director.layout/work-director.layout.module').then(m=>m.WorkDirectorLayoutModule),
      }
    ]
  }


];

@NgModule(
  {
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes , {useHash: true})
    ],
    exports: [

    ]
  }
)


export class pageRouteModule {
}
