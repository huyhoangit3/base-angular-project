import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AdminComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
