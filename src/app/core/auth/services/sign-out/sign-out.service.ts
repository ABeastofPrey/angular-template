import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/share/services';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignOutService extends AuthService {

  constructor(private router: Router, private user: UserService) { super(); }

  public signOut(): void {
    super.removeToken();
    this.user.removeUser();
    this.router.navigate(['/auth/sign-in']);
  }
}
