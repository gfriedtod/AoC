import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProjectPageComponent} from "./project-page/project-page.component";
import {ChronoPageComponent} from "./chrono-page/chrono-page.component";
import {CountriesPageComponent} from "./countries-page/countries-page.component";
import {WebPageComponent} from "./web-page/web-page.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  //  { path: '', component: WebPageComponent },
  // { path: 'project', component: ProjectPageComponent },
  // {path: 'about-us', component:ChronoPageComponent },
  // { path: 'countries', component:  CountriesPageComponent },

  {
    path: '',
    component: WebPageComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./web-page/web-page.module').then(m => m.WebPageModule)
      }
    ]
  }
];

@NgModule(
  {
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes , {
        useHash: true
      })
    ],
    exports: [
      RouterModule
    ]
  }
)


export class pageRouteModule {
}
