import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CarousalItemComponent } from './carousal-item/carousal-item.component';
import { CollapseComponent } from './collapse/collapse.component';
import { HourePipeComponent } from './houre-pipe/houre-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    CarousalItemComponent,
    CollapseComponent,
    HourePipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
