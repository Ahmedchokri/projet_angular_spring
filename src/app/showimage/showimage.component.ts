import { Component, Input, OnInit } from '@angular/core';
import { produit } from 'app/modals/product';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowimageComponent implements OnInit {
  @Input() request:string;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
