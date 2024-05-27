import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  data: any = [];
  shuliang: number = 1;
  min = 1;
  max = 1000;
  step = 1;
  value = 1;

  //小计
  xiaoji: number = 0;

  constructor(private http: HttpClient) {

  }

  getAllList() {
    this.http.get(`http://localhost:3000/shoppingCartInfo/getAllList`).subscribe((res) => {
      console.log(res);
      this.data = res
    })
  }

  deleteById(id: number) {
    this.http.delete(`http://localhost:3000/shoppingCartInfo/deleteById/${id}`).subscribe((res) => {
      console.log(res);
      location.reload();
    })
  }

  ngOnInit() {
    this.getAllList();
  }



}
