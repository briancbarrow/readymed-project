import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterPuppies' })
export class FilterPipe implements PipeTransform{
  transform(value, params) {
    let input1 = params[0];
    let input2 = params[1];
    let inputFilter = params[2];
    console.log(input1, input2, inputFilter)

    return value.filter((puppy => {
      if(inputFilter === false) {
        return puppy = puppy
      }
      if(input1 === "breed") {
        let BREED = puppy.breed.toUpperCase();
        console.log(BREED === input2.toUpperCase(), BREED, input2.toUpperCase())
        return BREED === input2.toUpperCase();
      } else if(input1 === "size") {
        let SIZE = puppy.size.toUpperCase();
        return SIZE === input2.toUpperCase();
      } else if(input1 === "location") {
        let LOC = puppy.location.toUpperCase();
        return LOC === input2.toUpperCase();
      }
    }))
  }
}
