import { Component } from '@angular/core';
import {faBars, faBed, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // showNavigationArrows = false;
	// showNavigationIndicators = false;
	// images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // constructor(config: NgbCarouselConfig) {
	// 	// customize default values of carousels used by this component tree
	// 	config.showNavigationArrows = true;
	// 	config.showNavigationIndicators = true;
	// }
  images = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]
  
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
