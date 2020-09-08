import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    userChanged = new Subject<User[]>();
    startEditing = new Subject<number>();
    userId = new Subject<number>();


    private users: User[] = [];

    constructor() {

    }

    setUserFromDataStorage(users: User[]) {
        this.users = users;
        this.userChanged.next(this.users.slice())
    }


    getUserById(userId: number): User {
        return this.users.find(user => user.userId == userId);
      }

      public addUser(newUser: User) {
        this.users.push(newUser);
        this.userChanged.next(this.users.slice());
    }

}