import { produit } from "./product";


export class Detailfacture{
 idproduit !:number;
 quantite !: number;
 prixtotal !: number
 pourcentageremise !: number;
 montantremise !:number;
 idfacture!: number;
 produit!:produit;
}