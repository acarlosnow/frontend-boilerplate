import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';

@Injectable()
export class AuthService {
  constructor() {}

  login(): Promise<boolean> {
    return of(true)
      .pipe(delay(4000))
      .toPromise();
  }
}
