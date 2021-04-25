import { Injectable } from '@angular/core';
// import { MD5 } from 'crypto-js';
import { User } from 'src/app/share/models';
import { ApiService, UserService } from 'src/app/share/services';
import { switchMap, tap, map as rxjsMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { isNil } from 'ramda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends AuthService {

  constructor(
    private api: ApiService,
    private router: Router,
    private user: UserService
  ) {
    super();
  }

  public signIn({ phone, password }: { phone: string, password: string }): void {
    // const hash = MD5(password).toString();
    const user = new User(-1, phone, password);

    const saveToken = (res: HttpResponse<{ token: string }>) => {
      if (!res.body) return;
      super.saveToken(res.body.token);
    };

    const saveUserInfo = (/*res: HttpResponse<{ token: string }>*/): Observable<User | null> => {
      return this.api.get<{ user: User }>('user/findByPhone', { phone })
      .pipe(rxjsMap(
        res => {
          if (res.status !== 200) return null;
          const user = res.body?.user;
          if (isNil(user)) return null;
          this.user.saveUser(user);
          return user;
        }
      ));
    };

    const observer = {
      next: (/*res: User | null*/) => {
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        console.dir(err);
      }
    };

    this.api.post<User, { token: string }>('auth/login', user)
      .pipe(tap(saveToken))
      .pipe(switchMap(saveUserInfo))
      .subscribe(observer);
  }
}
