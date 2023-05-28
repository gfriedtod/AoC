import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProjectPageComponent} from "./project-page/project-page.component";
import {ChronoPageComponent} from "./chrono-page/chrono-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project', component: ProjectPageComponent },
  {path: 'about-us', component:ChronoPageComponent }
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
