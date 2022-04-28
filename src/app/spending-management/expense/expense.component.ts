import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
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
    
  `]
})
export class ExpenseComponent implements OnInit {

  expensesList: Array<{id: string , date: string, description: string, categorie:string,ville:string,noteFrais:string,montant:string,aRembourser:boolean,tva:string,etat:string}> = [
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
  ]
  categorie : string ="";
  p : number = 1;
  key : string ='id';
  reverse : boolean = false;
  /** */
  closeResult :any ="" ;
  isDisabled = true;
  urlFile : any ="";
  /** */
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(private modalService: NgbModal,private configAccor:NgbAccordionConfig) { }

  ngOnInit(): void {
    this.expensesList = [
      {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
    ]
  }

  Search(){
    if (this.categorie==''){
      this.ngOnInit()
    }else{this.expensesList = this.expensesList.filter(res => {
      return res.categorie.toLocaleLowerCase().match(this.categorie.toLocaleLowerCase());
    })}
  } 
  
  sortField(key:any){
    this.key = key ;
    this.reverse = !this.reverse;
  }

  openScrollableContent(longContent : any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openScrollableContent1(longContent1 : any) {
    this.modalService.open(longContent1, { scrollable: true });
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

  @ViewChild('taxValue') taxValue!:ElementRef;
  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    this.taxValue.nativeElement.value =null;
    console.log(this.taxValue.nativeElement.value);
    return;
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  } 

  deleteFieldValue(index:any) {
    this.fieldArray.splice(index, 1);
  }


}
