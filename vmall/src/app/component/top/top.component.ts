import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

  isShow: boolean = true;
  zongshuliang: number = 0;

  search() {
    location.href = "/list"
  }

  constructor(private http: HttpClient) {

  }

  getAllList() {
    this.http.get(`http://localhost:3000/shoppingCartInfo/getAllList`).subscribe((res) => {
      console.log(res);
      let zongshuliang = 0;
      (res as []).map((item: any) => {
        zongshuliang += item.shuliang
      })
      this.zongshuliang = zongshuliang
    })
  }

  ngOnInit() {
    this.getAllList()
  }

}
