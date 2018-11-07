import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  marked = 'trues';
  theCheckbox = false;
  constructor() { }

  ngOnInit() {
  }
checkboxes=[
  {
    "name":"ADD",
    "theCheckbox": "false"
  },
  {
    "name":"EDIT",
    "theCheckbox": "true"
  },
  {
    "name":"VIEW",
    "theCheckbox": "true"
  }
];
toggleVisibility(e){
  this.marked= e.target.checked;
  console.log(this.marked);
}
}
