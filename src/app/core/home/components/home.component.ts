import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth/services/auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthServiceService) { }

  ngOnInit(): void { }

  public signOut(): void {
    this.auth.clearToken();
    this.router.navigate(['/auth/sign-in']);
  }
}
