import { Component } from '@angular/core';
import { PuppiesService } from '../../shared/puppies.service'
import { FilterPipe } from '../../shared/filter.pipe'

@Component({
  selector: 'puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css'],

})

export class PuppiesComponent {
  constructor(
    private puppiesService: PuppiesService
  ) {}

  ngOnInit() {
    this.puppiesService.getPuppies().subscribe(data => {
      // this.originalPuppies = data
      this.puppies = data
    });
  }

//this.puppiesService.getPuppies().subscribe(data => console.log(data))
  // private originalPuppies: Array<Object> = [];
  puppies: Array<Object> = []
  selected: string = "breed";
  public options: Array<Object> = [{value: "Breed"}, {value: "Size"}];
  filter: string = "Terrier";
  filtering: boolean = false;

  setPuppies(selected, filter) {
    // this.puppies = [];
    // for(var i = 0; i < this.puppiesService.puppies.length; i++) {
    //   if(this.puppiesService.puppies[i][selected] === filter) {
    //     this.puppies.push(this.puppiesService.puppies[i]);
    //   }
    // }
    console.log(this.puppies)
    return this.puppies
  }

  setFilter(newFilter) {
    this.filtering = true;
    this.filter = newFilter;
  }

  setSelection(newSelection){
    this.selected = newSelection;
    console.log(newSelection);
  }

  resetData() {
    this.filtering = false;
    this.puppies = this.puppiesService.puppies;
  }

}
