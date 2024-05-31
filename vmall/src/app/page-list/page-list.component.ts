import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {

  minPrice: number = 0;
  maxPrice: number = 0;
  Data: any = [];
  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 4
  };

  constructor(private http: HttpClient) {

  }

  confirm() {
    console.log(this.Data.listData);
    if (this.Data.listData.length > 0) {
      let newArr: any = []
      this.Data.listData.forEach((item: { spec: string; }) => {
        if (Number(item.spec) >= this.minPrice && Number(item.spec) <= this.maxPrice) {
          newArr.push(item);
          console.log(newArr);
          // console.log(this.Data);
        }
      })
      this.Data.listData = newArr;
    } else {
      console.log("找不到");
    }
  }

  pageIndexChange(pageIndex: any) {
    this.pager.pageIndex = pageIndex;
    this.getAllList();
  }

  getAllList() {
    this.http.get(`http://localhost:3000/detailInfo/getListByPage/${this.pager.pageIndex}`).subscribe((res) => {
      console.log(res);
      this.Data = res;
    })
  }

  ngOnInit() {
    this.getAllList();
  }

}
