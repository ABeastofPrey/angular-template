import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/_share-services';
import { LocalStorage } from '@app/_share-utils';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignOutService extends AuthService {

  constructor(
    private router: Router,
    private user: UserService,
    @Inject(LocalStorage) protected localStorage: Storage
    ) {
      super(localStorage);
    }

  public signOut(): void {
    super.removeToken();
    this.user.removeUser();
    this.router.navigate(['/auth/sign-in']);
  }
}
