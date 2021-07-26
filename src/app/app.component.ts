import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angelica-newApp';
  // appMessage = "";

  @Output() buttonEvent = new EventEmitter();
  deviceDetail?: Device = {
    id: undefined,
    name: " ",
    brand: " ",
    model: " ",
    year: 0,
    serial: " "
  }

  showUpdate: boolean = false;

  devices: Device[] = [
    {
      id: 1,
      name: "Device01",
      brand: "Dell",
      model: "Latitude 120",
      year: 2021,
      serial: "12WS"
    },
    {
      id: 2,
      name: "Device02",
      brand: "HP",
      model: "Pavillion",
      year: 2021,
      serial: "12WS"
    }

  ]
  deviceDetails!: Device;

  updateDisplay(value: any) {
    this.showUpdate = false;
    let ndx = this.devices.findIndex(device => device.id == value.id);
    this.devices[ndx] = value;
    console.log(ndx);
    // console.log(value, "app");
  }

  updateDevice(deviceId: number) {
    this.showUpdate = true;
    this.deviceDetail = this.devices.find(device => device.id == deviceId)
    console.log(deviceId);
  }
}
//   addDevice(device:Device){
//     console.log(device);
//     this.devices.push(device as Device);
//     console.log(this.devices);
//   }
// }
