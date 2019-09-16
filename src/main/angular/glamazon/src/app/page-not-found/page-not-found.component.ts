import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  image = "https://media.giphy.com/media/1QGRJ9cOTbh5K/giphy.gif";
  
  constructor() { }

  ngOnInit() {
    
  }
 
}