import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  posters: Array<any> = [];
  activePoster: string = '';

  constructor(private movieService: MoviesService) { }

   ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      let movies:any[] = data.results;
      this.posters = movies.map(movie => movie.poster_path);
      this.activePoster = this.posters[0];
    });
  }
}
