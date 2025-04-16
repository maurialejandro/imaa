import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { DavidAI, initDavidAI } from '../../node_modules/david-ai/';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  title = 'IMAA';
  ngAfterViewInit() {
    initDavidAI();
  }
}
