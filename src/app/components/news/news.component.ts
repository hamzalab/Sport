import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  result: string;
  maxNbr: number;
  users:any; 
  news:any;
  constructor() { }

  ngOnInit(): void {
    this.news = [
      { id: 1, name: 'Neymar', image: 'assets/images/person_1.jpg', date: "19/08/2020" },
      { id: 2, name: 'Messi', image: 'assets/images/bg_1.jpg', date: "20/08/2020" },
      { id: 3, name: 'Ronaldo', image: 'assets/images/person_2.jpg', date: "21/08/2020" },
      { id: 4, name: 'Ronaldo', image: 'assets/images/person_2.jpg', date: "21/08/2020" },
    ]
    this.result = this.moyenne(5, 3, 1);
    this.maxNbr = this.max([4, 12, 77]);
    this.users=[
      {id:1,email:"email"},
      {id:2,email:"tttt@hh.tt"},
      {id:3,email:"hdhdhd"} 
    ]
    for (let i = 0; i < this.users.length; i++) {
      let isValid=this.verifyEmail(this.users[i].email);
      // alert(`User Email N°${this.users[i].id} is ${isValid}`)
      
    }




  }

  moyenne(math: number, phy: number, info: number) {
    let moy
    moy = (math * 2 + phy * 3 + info * 4) / 9;
    if (moy > 0 && moy < 8) {
      // alert('Trés faible');

    }
    else if (moy >= 8 && moy < 10) {
      // alert('faible');
    }
    else if (moy >= 10 && moy < 13) {
      // alert('Assez Bien');
    }
    else if (moy >= 13 && moy < 16) {
      // alert('Bien');
    }
    else if (moy >= 16 && moy < 19) {

      // alert('Trés Bien');

    }
    else {
      // alert('excelent');
    }
    return moy;


  }
  max(T: number[]) {
    let max = T[0];
    for (let i = 0; i < T.length; i++) {
      if (max < T[i]) {
        max = T[i];

      }
    }
    return max;
  }
  reverseArray(T: number[]) {
    let reversedArray = Array(T.length);
    for (let i = T.length - 1; i >= 0; i--) {
      reversedArray[T.length - 1 - i] = T[i];



    }
    return reversedArray;
  }
  negatif(T:number[]) {
    let negativeArray=Array();
    for (let j =0; j< T.length ; j++) { 
      if (T[j]<0) {

      }
      
    }
  } 
  fusion(T:number[],N:number[]) {
    for (let j = 0; j < N.length; j++) {
      T.push(N[j]);
      
    } 
    alert(T);
    T.sort();
  } 
  verifyEmail(email:string){
    let regExp=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    );
    return regExp.test(email);
  }
}
