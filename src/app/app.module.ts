import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PofileComponent } from './components/pofile/pofile.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthStateService } from './services/auth-state.service';
import { TokenService } from './services/token.service';
import { AuthGuardAfterService } from './services/auth-guard-after.service';
import { AuthGuardBeforeService } from './services/auth-guard-before.service';

const appRoutes: Routes = [
  { path: 'login', canActivate: [AuthGuardBeforeService], component: LoginComponent },
  { path: 'signup', canActivate: [AuthGuardBeforeService], component: SignupComponent },
  { path: 'profile', canActivate: [AuthGuardAfterService], component: PofileComponent },
  { path: 'request-password-reset', canActivate: [AuthGuardBeforeService], component: RequestResetComponent },
  { path: 'response-password-reset', canActivate: [AuthGuardBeforeService], component: ResponseResetComponent },
  //{ path: 'not-found', component: FourOhFourComponent },
 // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PasswordComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PofileComponent,
      ],
      
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    

  ],
  
  providers: [
    AuthService,
    AuthStateService,
    TokenService,
    AuthGuardAfterService,
    AuthGuardBeforeService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
