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
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPuppies() {
    return this.http.get('https://readymed-server.herokuapp.com/puppies')
    .map((res:Response) => this.puppies = res.json())
  }


  deletePuppy(id) {
    return this.http.delete("https://readymed-server.herokuapp.com/puppies/" + id)
    .toPromise()
    .then(() => {
      this.getPuppies();
    })
  };
  puppies = [];
  filtering = false;
  // private currentUserSubject = new BehaviorSubject<string>('Erin');
  // public currentUser = this.currentUserSubject.asObservable();

  // setUser(name) {
  //   this.currentUserSubject.next(name);
  // }

}
