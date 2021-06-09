import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: []
})
export class MaterialCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardIcon: string;
  @Input() isPrimary: any;

  color: any = ""
  constructor() { }

  ngOnInit(): void {
    this.color = this.isPrimary == "true" ? "primary" : "accent";
  }

}
