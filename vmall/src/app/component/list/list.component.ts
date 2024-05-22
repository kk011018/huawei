import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

type response = {
  code: number,
  data: any[],
  mag: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  listData: any = { data: [] };

  constructor(private http: HttpClient) {
    this.getAllList();
  }

  getAllList() {
    this.http.get('http://localhost:3000/goodsInfo/getGoodsList').subscribe((res) => {
      console.log(res);
      this.listData = res;
    })
  }
}
