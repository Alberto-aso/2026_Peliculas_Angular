import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styles: ``,
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.moviesNowInTheaters = [
        {
          title: 'Inside Out 2',
          releaseYear: new Date(),
          cost: 1400.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
        },
        {
          title: 'Moana 2',
          releaseYear: new Date('2016-05-03'),
          cost: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
        },
      ];

      this.moviesComingSoon = [
        {
          title: 'Bad Boys: Ride or Die',
          releaseYear: new Date('2016-05-03'),
          cost: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
        },
        {
          title: 'Deadpool & Wolverine',
          releaseYear: new Date('2016-05-03'),
          cost: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
        },
        {
          title: 'Oppenheimer',
          releaseYear: new Date('2016-05-03'),
          cost: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
        },
        {
          title: 'The Flash',
          releaseYear: new Date('2016-05-03'),
          cost: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
        },
      ];
    }, 2000);
  }

  moviesNowInTheaters!: any[];
  moviesComingSoon!: any[];
}
