export class Risk {
    name: string;
    railName: string;
    roadName: string;
    safetyLevel: string;
    vehiclePerDay: number;
    reliability: number;
    risk: number;

    constructor(name: string, railName: string, roadName:string, safetyLevel: string, vehiclePerDay: number, reliability: number,risk: number){
        this.name =name;
        this.railName = railName;
        this.roadName = roadName;
        this.safetyLevel = safetyLevel;
        this.reliability = reliability;
        this.risk = risk;
    }
}
