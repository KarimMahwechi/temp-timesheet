export class Project{
    _id?:string;
    nameProject:string;
    descProject:string;
    createdAtProject:Date;
    expiredAtProject:Date;
    deadlineProject:Date;
    stateOfProject:string;
    priorityOfProject:string;

    constructor(nameProject:string,descProject:string,createdAtProject:Date,expiredAtProject:Date,deadlineProject:Date,stateOfProject:string,priorityOfProject:string){
        this.nameProject=nameProject;
        this.descProject=descProject;
        this.createdAtProject=createdAtProject;
        this.expiredAtProject=expiredAtProject;
        this.deadlineProject=deadlineProject;
        this.stateOfProject=stateOfProject;
        this.priorityOfProject=priorityOfProject;
    }
}