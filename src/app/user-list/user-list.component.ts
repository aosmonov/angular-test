import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Apollo, gql } from "apollo-angular";
import { Observable, of } from "rxjs";

type Response = {
  getAllUsers: User[];
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]> = of([]);

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  	this.apollo.watchQuery<Response>({
  	  query: gql`
	     query {
        getAllUsers
        {
            email,
            avatar,
            firstName,
            lastName,
            role
        }
      }
	    `
  	}).valueChanges.subscribe(result => {
  	  this.users = of(result.data.getAllUsers);
  	});
  }

}
