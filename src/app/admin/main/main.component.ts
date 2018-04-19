import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    const query = gql`query {
      user:currentUser {
        id
      }
    }
    `;
    this.apollo.query<{ user: any }>({ query: query }).subscribe((data) => {
      console.log(data);
    });
  }

}
