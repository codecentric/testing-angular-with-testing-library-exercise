import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.css'],
})
export class NewDogComponent {
  dogForm = new FormGroup({
    name: new FormControl(''),
    bark: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  constructor(private dogService: DogService, private router: Router) {}

  onSubmit() {
    const newDog: Dog = this.dogForm.getRawValue();
    this.dogService.add(newDog);
    this.router.navigateByUrl('');
  }
}
