import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ids=[1,2,3,4,5];

  people:any = [

{name : 'AB',age:22,country:'india'},
{name : 'A',age:23,country:'fa'},
{name : 'BC',age:24,country:'fa'},
{name : 'AC',age:25,country:'india'},
{name : 'ABX',age:26,country:'ind'},


  ]
  statecap = {state1:"cap1" , state2:"cap2"};
}
