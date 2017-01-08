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



  puppies: Array<Object> = this.puppiesService.puppies;
  selected: string = "breed";
  public options: Array<Object> = [{value: "Breed"}, {value: "Size"}];
  public filter: string = "Terrier";

  setPuppies(selected, filter) {
    this.puppies = [];
    for(var i = 0; i < this.puppiesService.puppies.length; i++) {
      if(this.puppiesService.puppies[i][selected] === filter) {
        this.puppies.push(this.puppiesService.puppies[i]);
      }
    }
    console.log(this.puppies)
    return this.puppies
  }

  setFilter(newFilter) {
    this.filter = newFilter;
    this.setPuppies(this.selected, newFilter)
  }

  setSelection(newSelection){
    this.selected = newSelection;
    console.log(newSelection);
  }

  resetData() {
    this.puppies = this.puppiesService.puppies;
  }

}
