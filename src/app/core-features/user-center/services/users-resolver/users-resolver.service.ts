import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '@app/_share-models';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserCenterService } from '../user-center/user-center.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]> {

  constructor(private router: Router, private userCenter: UserCenterService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Observable<never> {
    return this.userCenter.getUsers().pipe(
      mergeMap(users => {
        if (users) {
          return of(users);
        } else {
          this.router.navigate(['/user-dashboard']);
          return EMPTY;
        }
      })
    );
  }
}
