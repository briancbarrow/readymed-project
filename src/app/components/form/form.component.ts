import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'filter-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FilterFormComponent {
  constructor() {}
  @Input() puppies: Array<Object>;
  @Input() selected: string;
  @Output() onSelectionChanged = new EventEmitter<string>();
  @Output() onFilterChange = new EventEmitter<string>();
  @Output() onReset = new EventEmitter();

  changeSelection(newSelection: string) {
    this.onSelectionChanged.emit(newSelection)
  }

  changeFilter(newFilter: NgForm) {
    console.log(newFilter.value[this.selected])
    this.onFilterChange.emit(newFilter.value[this.selected])
  }
  reset() {
    this.onReset.emit();
  }

}
