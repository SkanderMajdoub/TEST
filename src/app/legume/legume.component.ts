import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

  @Input() image:string ;
  @Input() nom:string ;
  @Input() prix:number ;
  @Input() frais : boolean ;
  @Input() quantite : number ; 
 
  oncalculprix(quantite : number)
{

return this.quantite * this.prix ;

}


  constructor() { }

  ngOnInit() {
  }

}
