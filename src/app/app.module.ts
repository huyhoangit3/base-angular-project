import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [
    // CustomPreloadingStrategy, // custom preloading stratery
    AuthGuardService,
    
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
