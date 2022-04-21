import { IClienti } from "../clienti/iclienti";
import { IStatoFattura } from "../stato-fattura/istato-fattura";

export interface IFatture {
    id:number,
    data:string,
    numero:number,
    anno:number,
    importo:number,
    stato:IStatoFattura
    cliente:IClienti,
}
