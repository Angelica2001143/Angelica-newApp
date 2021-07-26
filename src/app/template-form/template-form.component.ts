import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addDevice(form: NgForm){
    // alert('add device');
    //console.log(form.value);
    this.deviceDetails.emit(form.value);
  }
}
