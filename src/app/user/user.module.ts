import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoggedInAreaComponent } from './components/logged-in-area/logged-in-area.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    LoggedInAreaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
