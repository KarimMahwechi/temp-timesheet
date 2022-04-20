import { Component, OnInit , ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})

export class ExpensesComponent implements OnInit {
  closeResult :any ="" ;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openBackDropCustomClass(content : any ) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content : any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content : any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content : any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent : any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openScrollableContent1(longContent1 : any) {
    this.modalService.open(longContent1, { scrollable: true });
  }

  openModalDialogCustomClass(content : any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }
}
