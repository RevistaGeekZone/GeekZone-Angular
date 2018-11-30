import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimercuatrimestreComponent } from './pages/primercuatrimestre/primercuatrimestre.component';
import { SegundocuatrimestreComponent } from './pages/segundocuatrimestre/segundocuatrimestre.component';
import { TercercuatrimestreComponent } from './pages/tercercuatrimestre/tercercuatrimestre.component';
import { CuartocuatrimestreComponent } from './pages/cuartocuatrimestre/cuartocuatrimestre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PrimercuatrimestreComponent,
    SegundocuatrimestreComponent,
    TercercuatrimestreComponent,
    CuartocuatrimestreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
