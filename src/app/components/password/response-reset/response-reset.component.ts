import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { throwError } from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  changePasswordForm: FormGroup;
  errors = null;

constructor(
    public fb: FormBuilder,
    route: ActivatedRoute,
    public authService: AuthService,
  ) {
    this.changePasswordForm = this.fb.group({
      email: [''],
      password: [''],
      password_confirmation: [''],
      passwordToken: ['']
    })
    route.queryParams.subscribe((params) => {
      this.changePasswordForm.controls['passwordToken'].setValue(params['token']);
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.resetPassword(this.changePasswordForm.value).subscribe(
      result => {
        alert('Password has been updated');
        this.changePasswordForm.reset();
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleError(error:any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }
}
