import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
  }

  login(username: String, password: String) {
    const query = gql`query ($username: String!, $password: String!) {
      loginInfo:login(username: $username, password: $password) {
        id
        __typename
      }
    }
    `;
    const variables = { username: username, password: password };
    this.apollo.query<{ loginInfo: any }>({ query: query, variables: variables, fetchPolicy: "network-only" }).subscribe((data) => {

      if (data && data.data && data.data.loginInfo && data.data.loginInfo.id) {
        alert(data.data.loginInfo.id);
        location.href = '/admin';
      } else {
        location.href = '/login';
      }
    });
  }

}
