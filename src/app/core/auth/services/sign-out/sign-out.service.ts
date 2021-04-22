import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  constructor(private auth: AuthService, private router: Router) { }

  public signOut(): void {
    this.auth.clearToken();
    this.router.navigate(['/auth/sign-in']);
  }
}
