import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'ng-devui/modal';
import { AddressComponent } from '../component/address/address.component';
import { Dialog3Component } from '../component/dialog3/dialog3.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  providers: [DialogService]
})
export class ShoppingCartComponent {

  data: any = [];
  shuliang: number = 1;
  min = 1;
  max = 1000;
  step = 1;
  value = 1;
  chickedAll: boolean = false;
  //小计
  xiaoji: number = 0;
  //总价
  zongjia: number = 0;
  //总件数
  zongjianshu: number = 0;


  config1 = {
    id: 'dialog-service',
    width: '700px',
    maxHeight: '800px',
    // title: 'Start Snapshot Version',
    content: Dialog3Component,
    backdropCloseable: true,
    onClose: () => console.log('on dialog closed'),
    data: {
      name: 'Tom',
      age: 10,
      address: 'Chengdu',
    },
  };

  openDialog1(dialogtype?: string, showAnimation?: boolean) {
    if (this.data.some((item: any) => item.ischick == true)) {
      const results = this.dialogService.open({
        ...this.config1,
        dialogtype: dialogtype,
        showAnimation: showAnimation,
        placement: 'unset',
        buttons: [
          {
            btnwidth: '130px',
            cssClass: 'danger',
            text: '确定',
            disabled: false,
            handler: ($event: Event) => {
              results.modalInstance.hide();
            },
          },
        ],
      });
      console.log(results.modalContentInstance);
      this.deleteByIdAll()
    }
  }

  selectAll() {
    if (this.chickedAll) {
      console.log(this.data.map((item: any) => { item.ischick = false; return item }));
      this.data = this.data.map((item: any) => { item.ischick = false; return item });
    } else {
      this.data = this.data.map((item: any) => { item.ischick = true; return item });
    }
    this.updateZongjia()
    this.updateZongjianshu()
  }

  selectOne(i: number) {
    this.data[i].ischick = !this.data[i].ischick;
    this.chickedAll = this.data.filter((item: any) => item.ischick == true).length == this.data.length;
    console.log(this.data);
    this.updateZongjia()
    this.updateZongjianshu()
  }

  updateZongjia() {
    this.zongjia = this.data.reduce((prev: any, item: any,) => {
      return prev + (item.ischick ? Number(item.spec) * item.shuliang : 0)
    }, 0)
    console.log(this.zongjia);
  }

  updateZongjianshu() {
    this.zongjianshu = this.data.reduce((prev: any, item: any,) => {
      return prev + (item.ischick ? item.shuliang : 0)
    }, 0)
    console.log(this.zongjianshu);
  }

  deleteByIdAll() {
    let list: any[] = [];
    this.data.filter((item: any) => item.ischick == true)
      .forEach((item: any) => {
        console.log(item);
        list.push(this.deleteById(item.id));
      })
    Promise.all(list).then((res) => {
      this.getAllList()
    })
  }


  constructor(private http: HttpClient, private dialogService: DialogService) {

  }

  openstandardDialog(dialogtype?: string) {
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '700px',
      maxHeight: '500px',
      title: '添加地址',
      content: AddressComponent,
      backdropCloseable: true,
      dialogtype: dialogtype,
      onClose: () => {
        console.log('aaa');
      },
      buttons: [
        {
          cssClass: 'stress',
          text: 'Confirm',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },

        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },

        },
      ],
      data: {
        name: 'Tom',
        age: 10,
        address: 'Chengdu'
      },
    });
  }




  getAllList() {
    this.http.get(`http://localhost:3000/shoppingCartInfo/getAllList`).subscribe((res) => {
      console.log(res);
      this.data = (res as []).map((item: any, index: number) => {
        item.ischick = this.data[index]?.ischick;
        return item;
      })
      this.updateZongjia()
      this.updateZongjianshu()
    })
  }

  deleteById(id: number) {
    this.http.delete(`http://localhost:3000/shoppingCartInfo/deleteById/${id}`).subscribe((res) => {
      console.log(res);
      this.getAllList();
      // location.reload();
    })
  }

  shuliangjianyi(id: number) {
    this.http.put(`http://localhost:3000/shoppingCartInfo/shuliangjianyi/${id}`, () => { }).subscribe((res) => {
      this.getAllList();
      // location.reload();
    })
  }

  shuliangjiayi(id: number) {
    this.http.put(`http://localhost:3000/shoppingCartInfo/shuliangjiayi/${id}`, () => { }).subscribe((res) => {
      this.getAllList();
      // location.reload();
    })
  }

  ngOnInit() {
    this.getAllList();
  }


  // clear() {
  //   this.http.put(`http://localhost:3000/shoppingCartInfo/clear`, () => { }).subscribe((res) => {
  //     this.getAllList();
  //     // location.reload();
  //   })
  // }

  phone(num: string) {
    let str = num.substring(0, 3) + "****" + num.substring(7, 11);
    return str;
  }



}
