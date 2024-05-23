import { Component } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { DialogComponent } from '../component/dialog/dialog.component';
import { Dialog2Component } from '../component/dialog2/dialog2.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  title: string = "HUAWEI MatePad Pro 13.2英寸";
  banben: string = "WiFi 12GB+256GB";
  color: string = "曜金黑";
  newprice: number = 4999;
  oldprice: number = 5999;
  shuliang: number = 1;
  x: number = 0;
  y: number = 0;

  banbenArr: string[] = [
    "WiFi 12GB+256GB",
    "WiFi 12GB+512GB",
    "WiFi 16GB+512GB",
    "WiFi 8GB+256GB",
  ]

  colorArr: string[] = [
    "幻夜黑",
    "星河银",
    "雅川青",
    "曜石黑",
  ]

  config1 = {
    id: 'dialog-service',
    width: '700px',
    maxHeight: '800px',
    // title: 'Start Snapshot Version',
    content: DialogComponent,
    backdropCloseable: true,
    onClose: () => console.log('on dialog closed'),
    data: {
      name: 'Tom',
      age: 10,
      address: 'Chengdu',
    },
  };

  config2 = {
    id: 'dialog-service',
    width: '400px',
    maxHeight: '800px',
    // title: '',
    content: Dialog2Component,
    backdropCloseable: true,
    onClose: () => console.log('on dialog closed'),
    data: {
      name: 'Tom',
      age: 10,
      address: 'Chengdu',
    },
  };

  $enent: any;

  constructor(private dialogService: DialogService) { }

  openDialog1(dialogtype?: string, showAnimation?: boolean) {
    const results = this.dialogService.open({
      ...this.config1,
      dialogtype: dialogtype,
      showAnimation: showAnimation,
      placement: 'unset',
      buttons: [
        {
          btnwidth: '130px',
          cssClass: 'danger',
          text: '分期购买',
          disabled: false,
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
    console.log(results.modalContentInstance);
  }

  openDialog2(dialogtype?: string, showAnimation?: boolean) {
    const results = this.dialogService.open({
      ...this.config2,
      dialogtype: dialogtype,
      showAnimation: showAnimation,
      placement: 'unset',
      buttons: [
        {
          id: "btn-1",
          btnwidth: '130px',
          cssClass: 'primary',
          text: '再逛逛',
          disabled: false,
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
        {
          id: "btn-2",
          btnwidth: '130px',
          cssClass: 'danger',
          text: '去结算',
          disabled: false,
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
    console.log(results.modalContentInstance);
  }

  selectBanben(item: string) {
    this.banben = item;
  }

  selectColor(item: string) {
    this.color = item;
  }

  reduce() {
    if (this.shuliang <= 1) {
      return
    }
    this.shuliang--
  }

  add() {
    this.shuliang++
  }

  a(e: any) {
    this.x = 3 * e.offsetX - 150;
    this.y = 3 * e.offsetY - 150;
    document.querySelector("#aaa")?.setAttribute("style", `--x:${this.x};--y:${this.y};`);
  }

}
