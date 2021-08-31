import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tredingMovies: Array<any> = [];
  popularMovies: Array<any> = [];
  topRatedMovies: Array<any> = [];
  nowPlayingMovies: Array<any> = [];
  getUpcomingMovies: Array<any> = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    forkJoin({
      tredingMovies:  this.movieService.getTrendingMovies(),
      popularMovies:  this.movieService.getPopularMovies(),
      topRatedMovies:  this.movieService.getTopRated(),
      nowPlayingMovies:  this.movieService.getNowPlayngMovies(),
      getUpcomingMovies:  this.movieService.getUpcomingMovies(),
    })
    .subscribe(({tredingMovies, popularMovies, topRatedMovies, nowPlayingMovies, getUpcomingMovies}: any) => {
      this.tredingMovies = tredingMovies['results'];
      this.popularMovies = popularMovies['results'];
      this.topRatedMovies = topRatedMovies['results'];
      this.nowPlayingMovies = nowPlayingMovies['results'];
      this.getUpcomingMovies = getUpcomingMovies['results'];
    });
  }
}
