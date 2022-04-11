export class Goal {
 
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public author:string,
    public completeDate: Date,
    public votes:number,
    public upVote:number,
    public downVote:number
  ) {
    this.showDescription = false;
  }
}
