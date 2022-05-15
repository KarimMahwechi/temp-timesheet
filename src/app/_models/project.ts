export class Project{
    _idProject?:number;
    nameProject:String;
    descProject:String;
    createdAtProject:Date;
    expiredAtProject:Date;
    deadlineProject:Date;
    stateOfProject:String;
    priorityOfProject:String;

    constructor(nameProject:String,descProject:String,createdAtProject:Date,expiredAtProject:Date,deadlineProject:Date,stateOfProject:String,priorityOfProject:String){
        this.nameProject=nameProject;
        this.descProject=descProject;
        this.createdAtProject=createdAtProject;
        this.expiredAtProject=expiredAtProject;
        this.deadlineProject=deadlineProject;
        this.stateOfProject=stateOfProject;
        this.priorityOfProject=priorityOfProject;
    }
}