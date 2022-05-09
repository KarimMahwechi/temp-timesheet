export class Project{
    _idProject?:number;
    nameProject:String;
    descProject:String;
    createdAtProject:Date;
    expiredAtProject:Date;
    deadlineProject:Date;
    priceProject:number;
    stateOfProject:String;

    constructor(nameProject:String,descProject:String,createdAtProject:Date,expiredAtProject:Date,deadlineProject:Date,priceProject:number,stateOfProject:String){
        this.nameProject=nameProject;
        this.descProject=descProject;
        this.createdAtProject=createdAtProject;
        this.expiredAtProject=expiredAtProject;
        this.deadlineProject=deadlineProject;
        this.priceProject=priceProject;
        this.stateOfProject=stateOfProject;
    }
}