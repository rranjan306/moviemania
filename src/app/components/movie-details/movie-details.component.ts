import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  similarMovies: any[] = [];
  trailerVideo: any;

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      forkJoin({
        movieDetails:  this.movieService.getMovieDetails(id),
        similarMovies:  this.movieService.getSimilarMovies(id),
        trailerVideos:  this.movieService.getMovieVideos(id)
      })
      .subscribe(({movieDetails, similarMovies, trailerVideos}: any) => {
        this.movie = movieDetails;
        this.similarMovies = similarMovies['results'];
        this.trailerVideo = trailerVideos['results'][1] ? trailerVideos['results'][1] : trailerVideos['results'][0];
      });
    });
  }

  getSafeURL() {
    const URL = `https://www.youtube.com/embed/${this.trailerVideo?.key}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }

  onMovieSelect(movie: any) {
    this.router.navigate([`/movie/${movie.id}`]);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200)
  }
}
