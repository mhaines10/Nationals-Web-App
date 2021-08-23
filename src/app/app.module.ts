import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule} from  '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BattersComponent } from './batters/batters.component';
import { BatterCardComponent } from './batter-card/batter-card.component';
import { BatterViewComponent } from './batter-view/batter-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BattersComponent,
    BatterCardComponent,
    BatterViewComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    NgxChartsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
