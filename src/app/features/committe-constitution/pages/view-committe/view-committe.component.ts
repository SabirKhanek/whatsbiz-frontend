import { Component } from '@angular/core';

@Component({
  selector: 'app-view-committe',
  templateUrl: './view-committe.component.html',
  styleUrls: ['./view-committe.component.css']
})
export class ViewCommitteComponent {
  constructor() {
  }
  searchTerm!: string;
  items: string[] = [
    'Finance and Planning Committee',
    'Purchase Committee',
    'Academic Committee',
    'SyndicateCommittee',
    'Board of Studies Committee',
    'Discipline Committee'
    
  ];
  filteredItems!: string[];

  
     name = '';
     purpose = '';
     Notes= '';
     instruction='';
     isprinted:boolean=false;
     isPopupHidden: boolean = true;
     

     search() {
      this.filteredItems = this.items.filter(item =>
        item.toLowerCase().includes(this.searchTerm.toLowerCase())
        
      )
      this.isprinted=true;
    }
    showPopUp() {
      this.isPopupHidden = false;
     
    }
  
    closePopUp() {
      this.isPopupHidden = true;
      
    }
    togglePopup() {
      this.isPopupHidden = !this.isPopupHidden;
    }

}
