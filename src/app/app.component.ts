import {OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import {CollapseComponent} from "./collapse/collapse.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  isCollapsed1:boolean;
  isCollapsed2:boolean;
  isCollapsed3:boolean;
  @ViewChild(CollapseComponent) collapseContentChild: string;

  constructor() {
    this.isCollapsed1 = true;
    this.isCollapsed2 = false;
    this.isCollapsed3 = false;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.collapseContentChild);
  }

  toggleCollapse1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  toggleCollapse2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  toggleCollapse3() {
    this.isCollapsed3 = !this.isCollapsed3;
  }

}
