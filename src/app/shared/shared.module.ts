import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authInterceptorProviders } from './helper/auth-interceptor';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [CommonModule],
    declarations: [
        LoginComponent
    ],
    providers: [authInterceptorProviders]
})
export class SharedModule { }
