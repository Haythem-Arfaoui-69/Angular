import { Component, OnInit } from '@angular/core';
import { emploi } from './core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {


  listEmploi: emploi[] = [];

 

  constructor() { 
    this.listEmploi[0]={reference: "1" ,titre:"developpeur",entreprise:"vermeg",etat:true};
    this.listEmploi[0]={reference: "2" ,titre:"docteur",entreprise:"Medical_Carrefour",etat:true};
   
  }

  ngOnInit(): void {
  }

 
    
  
 
somme : any=0;
  calculer(){
      this.somme= this.listEmploi.filter(e=>e.etat==true).length

  }


  copyList: any[] = [];
  filter(value: any) {
    this.copyList=this.listEmploi;
    let v = value.target.value;
    this.listEmploi= this.copyList.filter(l => { 
      return l.entreprise.toLowerCase().includes(v.toLowerCase())
      
    })
  }

}
