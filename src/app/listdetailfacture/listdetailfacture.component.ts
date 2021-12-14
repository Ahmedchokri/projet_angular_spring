import { Component, Input, OnInit } from '@angular/core';
import { Detailfacture } from 'app/modals/detailfacture';


@Component({
  selector: 'app-listdetailfacture',
  templateUrl: './listdetailfacture.component.html',
  styleUrls: ['./listdetailfacture.component.css']
})
export class ListdetailfactureComponent implements OnInit {
  @Input() listdetailsfacture:Detailfacture[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
