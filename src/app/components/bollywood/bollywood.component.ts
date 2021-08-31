import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.scss']
})
export class BollywoodComponent implements OnInit {

  movies: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getBollywood().subscribe((data: any) => {
      this.movies = data['results'];
    })
  }
}
