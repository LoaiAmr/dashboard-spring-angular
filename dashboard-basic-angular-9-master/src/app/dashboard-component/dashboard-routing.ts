import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';



export const DashboardRoutes: Routes = [

  {
    path: 'users', component: UsersComponent,
    children: [

      { path: '', component: UserListComponent },
      { path: ':id', component: UserItemComponent },

    ]
  },
];
