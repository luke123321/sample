import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AdminGuardGuard implements CanActivate {

  constructor(private apollo: Apollo) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  getCurrentUser() {

    const query = gql`query {
        user:currentUser {
          id
        }
      }
      `;
    let promise = new Promise<boolean>((resolve, reject) => {
      this.apollo.query<{ user: any }>({ query: query, fetchPolicy: "network-only" }).subscribe((data) => {
        console.log(data);
        // if (data && data.data && data.data.user && data.data.user.id) {
        //   resolve(true);
        // } else {
        //   resolve(false);
        // }
      });
    });
    return promise;

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
