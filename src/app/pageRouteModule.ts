import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProjectPageComponent} from "./project-page/project-page.component";
import {ChronoPageComponent} from "./chrono-page/chrono-page.component";
import {CountriesPageComponent} from "./countries-page/countries-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project', component: ProjectPageComponent },
  {path: 'about-us', component:ChronoPageComponent },
  { path: 'countries', component:  CountriesPageComponent }
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)


export class pageRouteModule {
}
