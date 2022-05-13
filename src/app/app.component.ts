import { Component, OnInit } from '@angular/core';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  doglist: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.doglist = this.dogService.getDoggos;
  }
}
