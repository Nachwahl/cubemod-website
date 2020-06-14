import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public products;
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3001/products').subscribe((res) => {
      // @ts-ignore
      this.products = res;
    });
  }

}
