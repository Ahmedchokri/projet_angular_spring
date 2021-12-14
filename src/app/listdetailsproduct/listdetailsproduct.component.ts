import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsproductService } from 'app/detailsproduct.service';
import { detailproduit } from 'app/modals/detailproduit';

@Component({
  selector: 'app-listdetailsproduct',
  templateUrl: './listdetailsproduct.component.html',
  styleUrls: ['./listdetailsproduct.component.css']
})
export class ListdetailsproductComponent implements OnInit {
detail_produit : detailproduit=new detailproduit();
show : boolean = false;
  constructor( 
    public dialogRef: MatDialogRef<ListdetailsproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number,
    private ec:DetailsproductService,
    ) { }

  ngOnInit(): void {
  this.ec.getproduitdetail(this.data).subscribe(
    res => {
      this.detail_produit=res;

    }
  )
  }
edit(){
this.show=true ;
}
show1(){
  this.ngOnInit();
}
}
