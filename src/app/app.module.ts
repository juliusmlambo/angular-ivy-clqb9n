import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterState } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';

import { SportbotComponent } from './sportbot/sportbot.component';
@NgModule({
  declarations: [AppComponent, UserComponent, SportbotComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
