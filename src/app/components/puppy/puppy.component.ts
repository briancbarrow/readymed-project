import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})

export class PuppyComponent {
  constructor() {}
  @Input() data: Object;

}
