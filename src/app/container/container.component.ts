import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  marked = 'true';
 
  constructor() { }

  ngOnInit() {
  }
checkboxes=[
  {
    "name":"ADD", 
  },
  {
    "name":"EDIT",
  },
  {
    "name":"VIEW",
  }
];
toggleVisibility(e){
  this.marked= e.target.checked;
  console.log(this.marked);
}
}
