import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { GreeterComponent } from './greeter/greeter.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GreeterComponent,
    TodosComponent,
    UserDetailsComponent,
    UsersComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
