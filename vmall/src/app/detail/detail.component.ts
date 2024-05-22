import { Component } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { DialogComponent } from '../component/dialog/dialog.component';

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

  config = {
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

  constructor(private dialogService: DialogService) { }

  openDialog(dialogtype?: string, showAnimation?: boolean) {
    const results = this.dialogService.open({
      ...this.config,
      dialogtype: dialogtype,
      showAnimation: showAnimation,
      placement: 'unset',
      buttons: [
        {
          cssClass: 'aaa',
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


}
