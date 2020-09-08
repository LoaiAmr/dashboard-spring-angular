import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "./user.model";
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserDataStorage {

    private usersUrl: string;

    constructor(
        private http: HttpClient,
        private userService: UserService) {
        this.usersUrl = 'http://localhost:8080/dashboard/users';
    }


    getUsers() {
        return this.http.get<User[]>(this.usersUrl)
            .pipe(
                map(users => {

                    return users;

                }), tap(users => {
                    this.userService.setUserFromDataStorage(users);
                })
            );
    }

    getUserById(userId: number) {
        return this.http.get<User>(this.usersUrl + '/' + userId);
    }

    saveUser(newUser: User) {
        this.http.post<User>(this.usersUrl, newUser).subscribe(user => {
            this.userService.addUser(user);
        });;
    }

}