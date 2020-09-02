import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id:1, teamOne:'FCB', teamTwo:'Madrid', scoreOne: 2, scoreTwo: 0},
    {id:2, teamOne:'CA', teamTwo:'EST', scoreOne: 4, scoreTwo: 1},
    {id:3, teamOne:'CSS', teamTwo:'Bizerte', scoreOne: 2, scoreTwo: 2},
    {id:4, teamOne:'ATM', teamTwo:'Bayern', scoreOne: 3, scoreTwo: 1},
    {id:4, teamOne:'Sevilla', teamTwo:'PSG', scoreOne: 0, scoreTwo: 1}
  ];
  let players=[
    {id: 1, name:'salah', poste:'Attaquant'}
  ] 
  let users=[
    {id:1,firstName:'ali',lastName:'trabelsi'}
  ]
  return {matches,players,users};

}
​
}

  
