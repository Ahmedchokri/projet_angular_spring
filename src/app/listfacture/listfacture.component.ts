import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas'
import { Facture } from 'app/modals/facture';
import { FactureService } from 'app/facture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Detailfacture } from 'app/modals/detailfacture';
import { DetailfactureService } from 'app/detailfacture.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-listfacture',
  templateUrl: './listfacture.component.html',
  styleUrls: ['./listfacture.component.css']
})
export class ListfactureComponent implements OnInit {
  list : Facture[];
  datefacture: any;
  list2:Detailfacture[];
 
  constructor( private modalService: NgbModal,private fs:FactureService,private df:DetailfactureService, private ac:ActivatedRoute, private route:Router,public datepipe: DatePipe , private _http:HttpClient)  { }
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {  
 this.fs.getFactureList().subscribe(res=>{
   this.list=res;
   console.log(res);
   this.ac.paramMap.subscribe(
   res => {
     return Facture;
   }
 );
 this.totalLength = res.length;
});

  }

  download(){
    var element = document.getElementById('table')
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight)
      doc.save("image.pdf")
    })
  }

Search(){
  if(this.datefacture == ""){
    this.ngOnInit();
  }
  else{
    this.list = this.list.filter(res =>{
    
      return res.datefacture.toLocaleString().match(this.datefacture.toLocaleString());
    })
  }
}
key:string='remise';
reverse:boolean =false;
sort(key){
  this.key= key;
  this.reverse = !this.reverse;
}  


  cancelFacture(id: number) {
    
    this.fs.cancelFacture(id).subscribe();
  }
  closeModal: string;
  triggerModal1(content,idfacture) {
    this.affiche(idfacture);
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
       this.closeModal = 'Closed with: ${res}';
     }, (res) => {
       this.closeModal = 'Dismissed ${this.getDismissReason(res)}';
     });
   }
   affiche(idfacture){
     this.df.getdetailfactures(idfacture).subscribe(res => {
      this.list2 = res;
      console.log(this.list2);
  
     })
   }
   openSweetalert(idfacture:number){
    swal({
        title: "Êtes-vous sûr?",
        text: "Une fois annulée, vous ne pourrez pas récupérer cette facture!",
        icon: "error",
        buttons: ["Annuler", "Confirmer"],
        dangerMode: true,
       })
       .then((willCancel) => {

        if (willCancel) {

        this.fs.cancelFacture(idfacture).subscribe();
      swal("La facture a été annulée!", {
      icon: "success",
      //timer: 999999999999999,  
      }).then(function(isConfirm) {
        if (isConfirm) {
          location.reload();
        } 
      //  timer: 999999999999999999999999999999999999999, 
      }); 
    
    }
     else {
      swal("La facture est en sécurité!",{
      icon: "info",
    });
     
      }
      
      });

}
}
