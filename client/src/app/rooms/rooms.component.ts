import { Component } from '@angular/core';
import { faB } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  faB = faB
  data = [
    {
      id: 1,
      src: "assets/img/sec.jpg",
      hotelName: "Durgesh Hotels",
      address: "ABC 420 Jalandhar",
      rating: 2.3,
      totalreview: 200,
    },
    {
      id: 2,
      src: "assets/img/sec.jpg",
      hotelName: "Durgesh Hotels",
      address: "ABC 420 Jalandhar",
      rating: 2.3,
      totalreview: 200,
    },
    {
      id: 3,
      src: "assets/img/sec.jpg",
      hotelName: "Durgesh Hotels",
      address: "ABC 420 Jalandhar",
      rating: 2.3,
      totalreview: 200,
    },
    {
      id: 4,
      src: "assets/img/sec.jpg",
      hotelName: "Durgesh Hotels",
      address: "ABC 420 Jalandhar",
      rating: 2.3,
      totalreview: 200,
    },
  ]

  select = 0;

  nextImage(){
    this.select ++;
  }
  PrveImage(){
    this.select--;
  }
}
