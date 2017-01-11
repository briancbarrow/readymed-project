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
      this.puppies = data
    });
  }
  puppies: Array<Object> = []
  selected: string = "breed";
  public options: Array<Object> = [{value: "Breed"}, {value: "Size"}];
  filter: string = "Terrier";
  filtering: boolean = false;

  setPuppies(selected, filter) {
    console.log(this.puppies)
    return this.puppies
  }

  setFilter(newFilter) {
    this.filtering = true;
    this.filter = newFilter;
    this.puppiesService.getPuppies();
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
