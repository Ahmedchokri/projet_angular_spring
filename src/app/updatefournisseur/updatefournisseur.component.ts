import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'app/fournisseur.service';
import { Fournisseur } from 'app/modals/fournisseur';

@Component({
  selector: 'app-updatefournisseur',
  templateUrl: './updatefournisseur.component.html',
  styleUrls: ['./updatefournisseur.component.css']
})
export class UpdatefournisseurComponent implements OnInit {
  
  idfournisseur:string;
  f : Fournisseur = new Fournisseur();
  constructor(private sf:FournisseurService , private ac:ActivatedRoute,private router: Router)  { }

  ngOnInit( ): void {
    
      

      this.ac.paramMap.subscribe(res=>this.sf.getFournisseurById(Number(res.get(
      'idfournisseur'))
      ).subscribe(res1=>{this.f=res1}));
     
     console.log(this.f)
   
  }
  update(){
     this.sf.updateFournisseur(this.f).subscribe(res=>{window.location.reload()});
    
  }

}
