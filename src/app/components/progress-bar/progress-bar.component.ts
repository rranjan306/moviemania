import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() vote: any = '';

  constructor() { }

  ngOnInit(): void {
    this.vote = Number(this.vote.toString().replace(/\./gi, ''));
    this.vote = this.vote.toString().length === 1 ? Number(this.vote * 10) : Number(this.vote);
  }
}
