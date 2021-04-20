import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Apollo, gql } from "apollo-angular";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]> = of([]);

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  	this.apollo.watchQuery({
  	  query: gql`
	    query getAllUsers
		    users {
		        email,
		        avatar,
		        firstName,
		        lastName,
		        role
		    }
		}
	    `
  	}).valueChanges.subscribe((result: any) => {
  	  this.users = result?.data?;
  	});
  }

}
