import { IComuni } from "../comuni/icomuni";
import { IProvince } from "../province/iprovince";
import { Isede } from "../sede/isede";

export interface IClienti {
    id: number,
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: Isede,
    indirizzoSedeLegale: Isede,
    dataInserimento: string,
    dataUltimoContatto: string,
    fatturatoAnnuale: number,
   
}


