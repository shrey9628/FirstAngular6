import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import { from } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
name = "shrey";

emp:Employee={

name:'Guru',
salary:1234

}

}
