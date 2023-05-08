import { Component } from '@angular/core';
import {faBars, faBed, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  faBars = faBars;
  faBed  = faBed;
  faMagnifyingGlass = faMagnifyingGlass 
  check = true;
  width = "0px";
  opensideNav() {
    if (this.check === true) {
      this.width = "250px"
      this.check = false;
    } else {
      this.width = "0px"
      this.check = true;
    }
  }
}
