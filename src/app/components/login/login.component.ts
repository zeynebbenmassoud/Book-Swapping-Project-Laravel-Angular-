import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public error = null;
  public email_error = null;
  public password_error = null;
  
  constructor(   public router: Router, public formbuilder: FormBuilder, public authService: AuthService,
     private authState: AuthStateService,     private token: TokenService,
    ) {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  onSubmit(){
      return this.authService.signin(this.loginForm.value).subscribe(
        result => {this.responseHandler(result);},
        error => this.handleError(error),
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
        this.router.navigate(['profile']);
      }
      );
      
  }

  handleError(error:any){
    this.error = error.error.error;
    this.email_error = error.error.email;
    this.password_error = error.error.password;
    
  }

  ngOnInit(): void {
  }

   responseHandler(data: any){
    this.token.handleData(data.access_token);
  }
}
