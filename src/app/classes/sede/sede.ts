import { Comuni } from "../comuni/comuni";
import { Province } from "../province/province";

export class Sede {
    id!:number;
    via!: string;
    civico!: string;
    cap!:string;
    localita!: string;
    comune!: Comuni;
    provincia!:Province;
}
