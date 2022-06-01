import { Component, VERSION } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  studene$:Observable<student[]>;
  couses$:Observable<courses[]>;

  getStudents():Observable<student[]>{

    return of([<student>{name:'rav',id:'12', coursecount: 1}, <student>{name:'barg',id:'13', coursecount: 2}])

  }

  getCourses():Observable<courses[]>{

    return of([<courses>{name:'rav',id:12}, <courses>{name:'barg',id:13}])

  }

  constructor(){
  
    this.studene$ = this.getStudents().pipe();
    this.couses$ = this.getCourses().pipe(delay(1000), );
 

  //  console.log(this.test([1,0,0,1]));
  }

  //  test<T>(arr:Array<T> ): T {

  //   // const arr = [1,0,0,1];
  //   let res = {};

  //   let finres;
  //   for(let i = 0; i< arr.length; i++){
  //     if(res[arr[i]]){
  //       finres = arr[i];
  //      break;
  //     }
  //     else
  //        res[arr[i]] = 1;
  //   }
    
  //   // if(finres)
  //   // console.log(finres);

  //   return finres;
    
  // }




}

interface student {
  name: string;
  id:string;
  coursecount:number;
}

interface courses {
  name: string;
  id: number;
}




