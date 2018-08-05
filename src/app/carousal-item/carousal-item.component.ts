import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-item',
  templateUrl: './carousal-item.component.html',
  styleUrls: ['./carousal-item.component.css']
})
export class CarousalItemComponent implements OnInit {
  hidden: boolean = true;
  toggleHidden() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  ngOnInit() {
  }

}
