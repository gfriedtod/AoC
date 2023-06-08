import {Routes} from "@angular/router";
import {HomePageComponent} from "../../page/home-page/home-page.component";
import {ProjectPageComponent} from "../../page/project-page/project-page.component";
import {ChronoPageComponent} from "../../page/chrono-page/chrono-page.component";
import {CountriesPageComponent} from "../../page/countries-page/countries-page.component";
import {WebPageComponent} from "./web-page.component";


export const webPageRoutingModule : Routes  =[
 // {path: 'home', component: WebPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'project', component: ProjectPageComponent },
  {path: 'about-us', component:ChronoPageComponent },
  { path: 'countries', component:  CountriesPageComponent }
]
