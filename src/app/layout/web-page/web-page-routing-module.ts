import {Routes} from "@angular/router";
import {HomePageComponent} from "../../page/home-page/home-page.component";
import {ProjectPageComponent} from "../../page/project-page/project-page.component";
import {ChronoPageComponent} from "../../page/chrono-page/chrono-page.component";
import {CountriesPageComponent} from "../../page/countries-page/countries-page.component";
import {WebPageComponent} from "./web-page.component";
import {resolve} from "@angular/compiler-cli";
import {countriePageResolver} from "../../resolver/countrie-page.resolv/countrie-page.resolver";


export const webPageRoutingModule : Routes  =[
 // {path: 'home', component: WebPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'works/:id', component: ProjectPageComponent },
  {path: 'about-us', component:ChronoPageComponent },
  { path: 'countries/:id', component:  CountriesPageComponent  ,
    // resolve  : { card : countriePageResolver }
  }
]
