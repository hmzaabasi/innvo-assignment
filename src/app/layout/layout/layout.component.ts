import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuItems: any[] = [
    {
      icon: "now_widgets",
      text: "Home",
      path: "",
      selected: true
    },
    {
      icon: "now_widgets",
      text: "Users",
      path: "/users",
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
