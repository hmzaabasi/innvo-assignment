import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innvo-assignment';
  menuItems: any[] = [
    {
      icon: "now_widgets",
      text: "Home",
      selected: true
    },
    {
      icon: "now_widgets",
      text: "Users",
      selected: false
    }
  ];
}
