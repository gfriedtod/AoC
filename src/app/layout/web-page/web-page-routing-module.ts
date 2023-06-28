import {Routes} from "@angular/router";
import {HomePageComponent} from "../../page/home-page/home-page.component";
import {ProjectPageComponent} from "../../page/project-page/project-page.component";
import {ChronoPageComponent} from "../../page/chrono-page/chrono-page.component";
import {CountriesPageComponent} from "../../page/countries-page/countries-page.component";
import {WebPageComponent} from "./web-page.component";
import {resolve} from "@angular/compiler-cli";
import {countriePageResolver} from "../../resolver/countrie-page.resolv/countrie-page.resolver";
import {UserProfileComponent} from "../../page/user-profile/user-profile.component";
import {canActivate} from "@angular/fire/auth-guard";
import {AuthGardService} from "../../service/routeGard/auth-gard.service";
import {CountriesViewPageComponent} from "../../page/countries-view-page/countries-view-page.component";
import {countrieLoaderResolver} from "../../resolver/countrie-loader.resov/countrie-loader.resolver";
import {countriesViewResolvResolver} from "../../resolver/countries-view-resolv/countries-view-resolv.resolver";
import {doGuardGuard} from "../../service/Do-guard/do-guard.guard";
import {DontComponent} from "../../page/dont/dont.component";


export const webPageRoutingModule : Routes  =[
 // {path: 'home', component: WebPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'works/:id', component: ProjectPageComponent },
  { path: 'worker', component: CountriesViewPageComponent , resolve:{ card :countriesViewResolvResolver}},
  {path: 'about-us', component:ChronoPageComponent },
  { path: 'countries', component:  CountriesPageComponent  ,
    // resolve  : { card : countriePageResolver }
  },

  {path:'project', component:DontComponent},

  { path:'profile' , component : UserProfileComponent , canActivate : [AuthGardService]}
]
