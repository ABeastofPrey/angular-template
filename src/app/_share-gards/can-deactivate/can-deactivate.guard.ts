import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactive {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(component: CanComponentDeactive): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactive ? component.canDeactive() : true;
  }
}
