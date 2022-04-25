import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';

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
    .badge {
      border-radius:12px;
    }
    .main-content{
      width:90%;
      background-color:red;
    }
    section.section{
      width:100%;
      height:100%;
      
    }
    .section-body{
      width:100%;
    }
  `]
})

export class ExpensesComponent implements OnInit {
  closeResult :any ="" ;
  isDisabled = true;
  urlFile : any =""

  public fieldArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('taxValue') taxValue!:ElementRef;
  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    this.taxValue.nativeElement.value =null;
    console.log(this.taxValue.nativeElement.value);
    return;
  }

  onSelectFile(e:any){
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.urlFile=event.target.result;
      }
    }
  }
  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index:any) {
      this.fieldArray.splice(index, 1);
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
