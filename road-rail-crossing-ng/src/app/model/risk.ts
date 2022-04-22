export class Risk {
    roadRailCrossingId : number
    name: string;
    railName: string;
    roadName: string;
    safetyLevel: string;
    vehiclePerDay: number;
    reliability: number;
    risk: number;

    constructor(roadRailCrossingId:number, name: string, railName: string, roadName:string, safetyLevel: string, vehiclePerDay: number, reliability: number,risk: number){
        this.roadRailCrossingId = roadRailCrossingId;
        this.name =name;
        this.railName = railName;
        this.roadName = roadName;
        this.safetyLevel = safetyLevel;
        this.reliability = reliability;
        this.risk = risk;
    }
}
