import { Component, OnInit } from '@angular/core';
import { UserDataStorage } from '../user.datastorage';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { MatDialog } from '@angular/material';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  animal: string;
  name: string;

  constructor(
    private userDataStorage: UserDataStorage,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userDataStorage.getUsers().subscribe();

    this.userService.userChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}
