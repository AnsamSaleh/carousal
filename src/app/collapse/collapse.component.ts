import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit, AfterContentInit {

  @ContentChildren(CollapseComponent) collapseContentChildren: QueryList<CollapseComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.collapseContentChildren.toArray());
  }

}
