import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-logged-in-area',
  templateUrl: './logged-in-area.component.html',
  styleUrls: ['./logged-in-area.component.css']
})
export class LoggedInAreaComponent implements OnInit {

  userData!: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      {
        next: (data) => this.userData = data,
        error: (err) => console.log(err.msg)
      }
    )
  }
}
