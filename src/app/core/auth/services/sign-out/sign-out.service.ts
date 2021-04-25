import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignOutService extends AuthService {

  constructor(private router: Router) { super(); }

  public signOut(): void {
    super.clearToken();
    this.router.navigate(['/auth/sign-in']);
  }
}
