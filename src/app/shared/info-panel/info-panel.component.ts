import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/core/service/Homepage/homepage.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: []
})
export class InfoPanelComponent implements OnInit {

  //We can create models but im not creating due to time constraint
  infoArry: any = []

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getDashboardData().subscribe(
      response => {
        this.infoArry.push({
          cardIcon: "home",
          count: response?.length,
          countTest: "Total"
        })
        console.log(this.infoArry)
      },
      err => console.log(err));
  }


}
