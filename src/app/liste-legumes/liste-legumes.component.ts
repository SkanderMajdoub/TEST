import { Component, OnInit , } from '@angular/core';

@Component({
  selector: 'app-liste-legumes',
  templateUrl: './liste-legumes.component.html',
  styleUrls: ['./liste-legumes.component.css']
})
export class ListeLegumesComponent implements OnInit {
tabLegumes = [
  {image: '../assets/tomate.jpg' , nom : 'tomate' , prix:2.8 , frais : false } ,
  {image: '../assets/radis.jpg' , nom : 'radis' , prix:1.8 , frais : true } ,
  {image: '../assets/carotte.jpg' , nom : 'carotte' , prix:3.8 , frais : false } 
];

date =  new Date (2019,10,12) ;

  constructor() { }

  ngOnInit() {
  }

}
