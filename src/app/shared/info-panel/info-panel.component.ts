import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HomepageService } from 'src/app/core/service/Homepage/homepage.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: []
})
export class InfoPanelComponent implements OnInit {

  //We can create models but im not creating due to time constraint
  infoArry: any = [];
  data: string[] = ["posts", "users", "comments", "albums"]

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    forkJoin([
      this.homepageService.getDashboardData(this.data[0]),
      this.homepageService.getDashboardData(this.data[1]),
      this.homepageService.getDashboardData(this.data[2]),
      this.homepageService.getDashboardData(this.data[3]),
    ]).subscribe(response => {
      if (response) {
        response.forEach((x, index) => {
          this.infoArry.push({
            cardIcon: "home",
            count: x?.length,
            countText: `Total ${this.data[index]}`
          })
        })
      }
    });
  }


}
