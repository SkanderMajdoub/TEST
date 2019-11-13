import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { ListeLegumesComponent } from './liste-legumes/liste-legumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    ListeLegumesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
