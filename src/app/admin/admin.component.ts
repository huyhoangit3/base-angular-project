import { Component, OnInit } from '@angular/core';
import { AdminService } from '../core/services/admin-service/admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  adminData: any;
  constructor(private adminService: AdminService) {}
  
  getAdminData(): any {
    this.adminService.getAdminData().subscribe({
      next: (data) => this.adminData = data,
      error: (err) => console.log(err.msg)
    })
  }
}
