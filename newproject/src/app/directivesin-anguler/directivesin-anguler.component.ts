import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesin-anguler',
  templateUrl: './directivesin-anguler.component.html',
  styleUrls: ['./directivesin-anguler.component.css']
})
export class DirectivesinAngulerComponent {
  show=false;
  toShowPara!:string;
  show1=true;
  toShowPara1:string='savita';
  // UndefinedProperty:any;
  nullProperty = null;
  toggel : boolean = false;
  cars  = ['mini cub' ,'swift', 'creta','bulero','murcedeez'];
  carDetails=[
    {carName : 'mini cub', carPrice : 230000, color : 'white'},
    {carName : 'swift', carPrice : 250000, color : 'black'},
    {carName : 'creta', carPrice : 230000, color : 'red'},
    {carName : 'bulero', carPrice : 270000, color : 'brawon'},
    {carName : 'murcedeez', carPrice : 730000, color : 'gray'}
  ];
  tableHeading: string[] =['CarName','CarPrice','Color'];
  data=[20,60,50,30,[60,30,89]];
  data2:any[] = [];
  data3:any[] = [];
  color = 'pink';
  styleCss = 'yellow2';
  test = 300; 
  switchValue =1003;

  constructor(){

  }
ngOnInit(){
  this.data.forEach((item,i)=>{
    if(i !=4 ){
      this.data2.push(item)
    }
  })

this.data.forEach((item:any, i)=>{
if(i==4){
  this.data3=[...item];
}
})
}




toggelEffect()
 {
  let abc;
//   this.toggel = !this.toggel;
this.toggel = !this.toggel;
 }


}