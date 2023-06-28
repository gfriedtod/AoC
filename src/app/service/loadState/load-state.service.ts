import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadStateService {

  private  _state$ =new BehaviorSubject<boolean>(false)
  get state$(){
    return this._state$.asObservable()
  }

  public SetLoadingStatut(loading : boolean){
    this._state$.next(loading)
  }
  constructor() { }
}
