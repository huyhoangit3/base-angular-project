import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home-service/home-service.service';

@Component({
  selector: 'user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeData().subscribe(
      {
        next: (data) => this.homeData = data,
        error: (err) => console.log(err.msg)
      }
    )
  }
}
