import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

import { User } from '../user.model';
import { UserDataStorage } from '../user.datastorage';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  @ViewChild('userForm') userForm: NgForm;

  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userDataStorage: UserDataStorage,
  ) {}

  onNoClick(): void {
    this.userForm.resetForm();
    this.dialogRef.close();
  }

  onSubmit(userForm: NgForm) {
    const value = userForm.value;
    const newUser = new User(0, value.username, value.email, "any image", true, value.role)
    this.userDataStorage.saveUser(newUser);
  }

}