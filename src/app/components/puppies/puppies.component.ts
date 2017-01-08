import { Component } from '@angular/core';
import { PuppiesService } from '../../shared/puppies.service'


@Component({
  selector: 'puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})

export class PuppiesComponent {
  constructor(
    private puppiesService: PuppiesService
  ) {}

  puppies: Object = this.puppiesService.puppies;

}
