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
  
  quanxuan = document.querySelector("#quanxuan")
  xuanze = document.querySelectorAll(".xuanze")
  zixuanxiang: any = document.getElementsByClassName("aaaa")

  selectAll(e: any) {
    console.log(e);
    console.log(this.zixuanxiang);
    for (let i = 0; i < this.zixuanxiang.length; i++) {
      this.zixuanxiang[i].checked = e.target.checked;
    }
  }


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

  shuliangjianyi(id: number) {
    this.http.put(`http://localhost:3000/shoppingCartInfo/shuliangjianyi/${id}`, () => { }).subscribe((res) => {
      this.getAllList();
      location.reload();
    })
  }

  shuliangjiayi(id: number) {
    this.http.put(`http://localhost:3000/shoppingCartInfo/shuliangjiayi/${id}`, () => { }).subscribe((res) => {
      this.getAllList();
      location.reload();
    })
  }

  ngOnInit() {
    this.getAllList();
  }


}
