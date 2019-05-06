import { Component } from '@angular/core';

@Component({                                   //It is a Angular Decorator If anything start with @ it known as Decorator
  selector: 'app-root',                        //Name of component (index.html mai jaa kr dhekho Yahi chlti h sbse pehle)
  templateUrl: './app.component.html',         //Rendaring template
  styleUrls: ['./app.component.css']          // CSS Files
})
export class AppComponent {                    //Varible are present here that uses in the html file
  title = 'CTS-Bangalore';
  Author = 'Guru';
  emps = [

{"name":"shrey" , "city":"Banglore"},
{"name":"lakshita" , "city":"Delhi"},
{"name":"vishal " , "city":"Chandi"}



  ];
  emp = {"name":"shrey" , "city":"value"};
  citites  = ['mumbai','Delhi' , 'Bangalore'];
  
}
