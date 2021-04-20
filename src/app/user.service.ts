import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public findAll(): Observable<User[]> {
    const users = of([{
      "email": "aomovoasdfds@dafd.com",
      "firstName": "Test", 
      "lastName": "testov",
      "avatar": "Avatarurl",
      "role": "USER"
    },{
      "email": "dsfsdf@dafd.com",
      "firstName": "Admin", 
      "lastName": "Useroff",
      "avatar": "sdfsdfsdfd",
      "role": "ADMIN"
    }]);
    return users;
  }

  public save(user: User) {
    return of(user);
  } 
}
