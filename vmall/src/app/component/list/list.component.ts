import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

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

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 4
  };

  Data: any = { listData: [] };

  obj: any = [];

  @Input() data1: any = [];

  constructor(private http: HttpClient) {

  }

  getAllList() {
    this.http.get(`http://localhost:3000/detailInfo/getListByPage/${this.pager.pageIndex}`).subscribe((res) => {
      console.log(res);
      this.Data = res;
    })
  }

  pageIndexChange(pageIndex: any) {
    this.pager.pageIndex = pageIndex;
    this.getAllList();
  }

  ngOnInit() {
    this.getAllList();
  }
}
