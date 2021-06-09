import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/core/service/Homepage/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getDashboardData().subscribe(
      response => console.log(response),
      err => console.log(err));
  }

}
