import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isloggedin: boolean = false;
  
  constructor(private Auth: AuthStateService, public router: Router, public token: TokenService,) { }

  ngOnInit(): void {
    this.Auth.userAuthState.subscribe(value => this.isloggedin = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    
    this.Auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
