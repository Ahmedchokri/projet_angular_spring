import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/client.service';
import { Client } from 'app/modals/client';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  id :number;
  client:Client;
  //client: Client =new Client();
  constructor(private cs:ClientService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

      this.client = new Client();
      this.cs.getClientById(this.id).subscribe( data => {
      this.client = data;
      console.log(this.client);
    });
  }
}
