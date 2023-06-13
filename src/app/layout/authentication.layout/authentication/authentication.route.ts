import {Routes} from "@angular/router";
import {LoginPageComponent} from "../../../page/login-page/login-page.component";
import {SignUpPageComponent} from "../../../page/sign-up-page/sign-up-page.component";

export const AuthenticationRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'signUp',
    component: SignUpPageComponent
  }
]
