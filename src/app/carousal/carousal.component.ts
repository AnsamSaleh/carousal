import {Component, ContentChildren, Input, OnInit, QueryList, AfterContentInit} from '@angular/core';
import {CarousalItemComponent} from "../carousal-item/carousal-item.component";


@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit, AfterContentInit {
  @Input('delay') delay: number;
  currentIndex: number = 0;
  items: CarousalItemComponent[];
  @ContentChildren(CarousalItemComponent) carousalItem: QueryList<CarousalItemComponent>;

  ngAfterContentInit() {
    this.items = this.carousalItem.toArray();
    this.items[0].toggleHidden();
     ++this.currentIndex;
    setInterval(() => {
      const length = this.items.length;
      this.items[this.currentIndex % length].toggleHidden();
      ++this.currentIndex;
      this.items[this.currentIndex % length].toggleHidden();
    }, this.delay)
  }

  constructor() { }

  ngOnInit() {
  }

}
