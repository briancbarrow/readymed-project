import { Component, Input, Output } from '@angular/core';
import { PuppiesService } from '../../shared/puppies.service'

@Component({
  selector: 'puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})

export class PuppyComponent {
  constructor(private puppiesService: PuppiesService) {}
  @Input() data: Object;
  notVisible: boolean = false;

  removePuppy(id) {
    console.log(id)
    this.puppiesService.deletePuppy(id)
    this.notVisible = true;
  }

}
