export interface IEntidadFederativa {
    id?: number;
    nombre?: string;
}

export class EntidadFederativa implements IEntidadFederativa {
    constructor(
        public id?: number,
        public nombre?: string,
    ) {
    }
}
