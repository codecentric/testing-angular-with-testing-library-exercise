import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css'],
})
export class DoglistComponent implements OnInit {
  doglist: Dog[] = [];

  constructor(private dogService: DogService) {}

  dogsays: string = '';

  ngOnInit(): void {
    this.doglist = this.dogService.getDoggos;
  }

  onClick(dog: Dog) {
    this.dogsays = `${dog.name} says "${dog.bark}!"`;
  }
}
