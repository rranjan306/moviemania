import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-popularity',
  templateUrl: './rate-popularity.component.html',
  styleUrls: ['./rate-popularity.component.scss']
})
export class RatePopularityComponent implements OnInit {

  @Input() voteAverage: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
