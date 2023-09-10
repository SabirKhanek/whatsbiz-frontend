import { Component } from '@angular/core';

@Component({
  selector: 'app-showup',
  templateUrl: './showup.component.html',
  styleUrls: ['./showup.component.css']
})
export class ShowupComponent {
  activetab:string='tab1';
  
  highlightedTab=(tab:string)=>{
    this.activetab=tab;
  }
}
