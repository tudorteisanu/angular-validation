import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./users-create/users-create.component').then(
        (m) => m.UsersCreateComponent
      ),
  },
  {
    path: 'roles',
    loadComponent: () =>
      import('./roles-create/roles-create.component').then(
        (m) => m.RolesCreateComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
