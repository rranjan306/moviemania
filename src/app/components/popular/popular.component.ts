import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  movies: Array<any> = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    })
  }

  onMovieSelect(movie: any) {
    this.router.navigate([`/movie/${movie.id}`]);
  }
}
