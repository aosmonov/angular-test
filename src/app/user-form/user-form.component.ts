import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Apollo, gql } from "apollo-angular";
import { Observable, of } from "rxjs";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
  	email: "",
    password: "",
  	firstName: "",
  	lastName: "",
  	avatar: "",
  	role: ""
  };

  constructor(private route: ActivatedRoute, private router: Router, private apollo: Apollo) {
    
  }

  onSubmit() {
    this.apollo.mutate({
      mutation: gql`
        mutation CreateUser($email: String, $password: String, $firstName: String, $lastName: String, $avatar: String, $role: String){
          createUser(user: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, avatar: $avatar, role: $role}) {email}
        }
      `,
      variables: {email: this.user.email, password: this.user.password, firstName: this.user.firstName, lastName: this.user.lastName, avatar: this.user.avatar, role: this.user.role}
    }).subscribe(data => {
      console.log(data);

      this.gotoUserList();
    });
  }

  gotoUserList() {
  	this.router.navigate(['/users']);
  }

  ngOnInit(): void {

  }

}
