import { InjectionToken } from '@angular/core';
import { isUndefined } from 'ramda-adjunct';


const fakeStorage: Storage = {
  length: 0,
  setItem: function (key: string, val: string) { },
  getItem: function () { return null; },
  removeItem: function (key: string) { },
  clear: function () { },
  key: function (index: number) { return null; }
};

export function getLocalStorage(): Storage {
  return isUndefined(window) ? fakeStorage : window.localStorage;
}

export const LocalStorage = new InjectionToken<Storage>(
  'localStorage'
  , {
    providedIn: 'root',
    factory: getLocalStorage
  }
);
