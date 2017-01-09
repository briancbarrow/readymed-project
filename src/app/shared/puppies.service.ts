import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PuppiesService {
  constructor (private http: Http) {}

  postPuppy(data) {
    console.log(data);
    return this.http.post('https://readymed-server.herokuapp.com/post', data)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  puppies = [
    {
      name: "Rex",
      size: "M",
      location: "Salt Lake",
      breed: "Terrier",
      image: "http://loremflickr.com/200/200/dog"
    },
    {
      name: "Ty",
      size: "L",
      location: "Provo",
      breed: "Schnauzer",
      image: "http://loremflickr.com/200/200/dog"
    },
    {
      name: "Jack",
      size: "S",
      location: "Murray",
      breed: "Hound",
      image: "http://loremflickr.com/200/200/dog"
    },
    {
      name: "Russell",
      size: "M",
      location: "Midvale",
      breed: "Hound",
      image: "http://loremflickr.com/200/200/dog"
    }
  ]
  // private currentUserSubject = new BehaviorSubject<string>('Erin');
  // public currentUser = this.currentUserSubject.asObservable();

  // setUser(name) {
  //   this.currentUserSubject.next(name);
  // }

}
