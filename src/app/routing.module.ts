import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SportbotComponent } from './sportbot/sportbot.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'sportbot', component: SportbotComponent },
  {
    path: '',
    redirectTo: '/sportbot',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
