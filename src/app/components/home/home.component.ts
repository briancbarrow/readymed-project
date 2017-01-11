import { Component } from '@angular/core';
import { PuppiesService } from '../../shared/puppies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home-div',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private puppiesService: PuppiesService) {}

  hideSubmitSuccess: boolean = true;

  createPuppy(newPuppy: NgForm) {
    this.hideSubmitSuccess = false;

    setTimeout(() => {
      this.hideSubmitSuccess = true;
    }, 3000)

    this.puppiesService.postPuppy({
      name: newPuppy.form.value.name,
      size: newPuppy.form.value.size,
      location: newPuppy.form.value.location,
      breed: newPuppy.form.value.breed,
      image: "http://loremflickr.com/200/200/dog"
    }).subscribe()
  }

}
