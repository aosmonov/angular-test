import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
  	email: "dsfsdfdsf@test.com",
  	firstName: "Aibek",
  	lastName: "Osmonov",
  	avatar: "sdfsdfsdf",
  	role: "USER"
  };

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
  	this.router.navigate(['/users']);
  }

  ngOnInit(): void {

  }

}