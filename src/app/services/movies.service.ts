import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovieDetails(id: number) {
    return this.http.get(`movie/${id}`);
  }

  getMovieImages(id: number) {
    return this.http.get(`movie/${id}/images`);
  }

  getSimilarMovies(id: number) {
    return this.http.get(`movie/${id}/similar`);
  }

  getMovieVideos(id: number) {
    return this.http.get(`movie/${id}/videos`);
  }

  getPopularMovies() {
    let page = Math.floor(Math.random() * 100);
    return this.http.get(`movie/popular?page=${page}`);
  }

  getLatestMovies() {
    return this.http.get(`movie/latest`);
  }

  getTrendingMovies() {
    return this.http.get(`trending/movie/week`);
  }

  getTopRated() {
    return this.http.get(`movie/top_rated`);
  }

  getNowPlayngMovies() {
    return this.http.get(`movie/now_playing`);
  }

  getUpcomingMovies() {
    return this.http.get(`movie/upcoming`);
  }

  getBollywood() {
    return this.http.get(`discover/movie?with_original_language=hi`);
  }
}
