import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui/form';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {

  data: number[] = [1, 2, 3];

  @Output() taskData = new EventEmitter;




  layoutDirection: FormLayout = FormLayout.Vertical;
  inputDemoConfig: any;
  textareaDemoConfig: any;
  selectDemoConfig: any;
  multipleSelectDemoConfig: any;
  multipleSelect2DemoConfig: any;
  radioDemoConfig: any;
  toggleDemoConfig: any;
  checkboxDemoConfig: any;
  singleDateDemoConfig: any;
  multiDateDemoConfig: any;
  inputDemoConfig2: any;
  selectDemoconfig2: any;
  multipleSelectDemoConfig3: any;
  singleDateDemoConfig2: any;
  disabled: false | undefined;

  labelList = [{
    id: 1,
    label: 'Option1'
  },
  {
    id: 2,
    label: 'Option2'
  },
  {
    id: 3,
    label: 'Option3'
  }];

  addedLabelList = [];

  selectOptions = [{
    id: 1,
    label: 'Option1'
  },
  {
    id: 2,
    label: 'Option2'
  },
  {
    id: 3,
    label: 'Option3'
  }];

  radioOptions = [{
    id: 4,
    label: 'Manual execution'
  }, {
    id: 5,
    label: 'Daily execution'
  }, {
    id: 6,
    label: 'Weekly execution'
  }];

  checkboxOptions = [
    { 'id': '1', 'label': 'Mon', checked: true },
    { 'id': '2', 'label': 'Tue' },
    { 'id': '3', 'label': 'Wed' },
    { 'id': '4', 'label': 'Thur' },
    { 'id': '5', 'label': 'Fri' },
    { 'id': '6', 'label': 'Sat' },
    { 'id': '0', 'label': 'Sun' }
  ];

  formData = {
    inputValue: '',
    textareaValue: '',
    selectValue: this.selectOptions[1],
    multipleSelectValue: [this.selectOptions[1], this.selectOptions[2]],
    multipleSelect2Value: [this.selectOptions[1], this.selectOptions[2]],
    radioValue: {},
    toggleValue: false,
    singDateValue: '',
    multiDateValue: {
      startDate: '',
      endDate: ''
    },

    inputValue2: '',
    singDateValue2: '',
  };

  province: any;
  city: any;
  area: any;

  ngOnInit() {
    this.taskData.emit(this.data);
    this.province = document.getElementById('province')
    this.city = document.getElementById('city');
    this.area = document.getElementById('area');
    this.multipleSelect2DemoConfig = {
      key: 'multipleSelect-demo2',
      label: 'Options(Multiple selection with delete)',
      isSearch: true,
      multiple: 'true',
      labelization: { enable: true, labelMaxWidth: '120px' },
      options: this.selectOptions
    };
  }


  aaaa() {
    this.city.innerHTML = '';
    this.area.innerHTML = '';
    let cityOptions: any[] = [];
    if (this.province.value === '北京市') {
      cityOptions = ['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '门头沟区'];
    } else if (this.province.value === '上海市') {
      cityOptions = ['黄浦区', '卢湾区', '静安区', '徐汇区', '长宁区', '普陀区'];
    } else if (this.province.value === '广东省') {
      cityOptions = ['广州市', '深圳市', '珠海市', '汕头市', '韶关市', '佛山市'];
    }
    for (var i = 0; i < cityOptions.length; i++) {
      let option = document.createElement('option');
      option.value = cityOptions[i];
      option.text = cityOptions[i];
      this.city.add(option);
    }
    this.area.innerHTML = '';
  };

  bbbb() {
    this.area.innerHTML = '';
    let areaOptions: any[] = [];
    if (this.city.value === '东城区') {
      areaOptions = ['交道口街道', '东华门街道', '景山街道', '东四街道', '东直门街道'];
    } else if (this.city.value === '西城区') {
      areaOptions = ['德胜街道', '什刹海街道', '西长安街街道', '广安门街道', '白纸坊街道'];
    } else if (this.city.value === '朝阳区') {
      areaOptions = ['三里屯街道', '麦子店街道', '亚运村街道', '大屯街道', '工体街道'];
    }
    for (var i = 0; i < areaOptions.length; i++) {
      let option = document.createElement('option');
      option.value = areaOptions[i];
      option.text = areaOptions[i];
      this.area.add(option);
    }
  }
}
