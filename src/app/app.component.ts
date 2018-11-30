import { Component } from '@angular/core';
import { ScrollanimateService } from './services/scrollanimate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public animationScroll: ScrollanimateService
  ) {
   }
}
