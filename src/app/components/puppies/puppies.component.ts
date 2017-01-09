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

  ngOnInit() {
    this.puppiesService.getPuppies().subscribe(data => {
      this.originalPuppies = data
      this.puppies = data
    });

  }

//this.puppiesService.getPuppies().subscribe(data => console.log(data))
  private originalPuppies: Array<Object> = [];
  puppies: Array<Object> = []
  selected: string = "breed";
  public options: Array<Object> = [{value: "Breed"}, {value: "Size"}];
  public filter: string = "Terrier";

  setPuppies(selected, filter) {
    this.puppies = [];
    for(var i = 0; i < this.originalPuppies.length; i++) {
      if(this.originalPuppies[i][selected] === filter) {
        this.puppies.push(this.originalPuppies[i]);
      }
    }
    console.log(this.puppies)
    return this.puppies
  }

  setFilter(newFilter) {
    console.log(newFilter)
    this.filter = newFilter;
    this.setPuppies(this.selected, newFilter)
  }

  setSelection(newSelection){
    this.selected = newSelection;
    console.log(newSelection);
  }

  resetData() {
    this.puppies = this.originalPuppies;
  }

}
