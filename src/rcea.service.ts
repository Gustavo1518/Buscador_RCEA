import axios from 'axios';
import { IPersonaFisica } from './model/persona-fisica.model';

export default class rceaService {

    private baseApiUrl: string;

    constructor(baseApiUrl?: string) {
        this.baseApiUrl = baseApiUrl || 'services/cvu/api';
    }

    public retrieveByCvu(cvu: string): Promise<IPersonaFisica> {
        return new Promise<IPersonaFisica>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + '/cvu/' + cvu)
                .then(function (res) {
                    resolve((<IPersonaFisica>res.data));
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public retrieveByRcea(rcea: string): Promise<IPersonaFisica> {
        return new Promise<IPersonaFisica>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + '/rcea/' + rcea)
                .then(function (res) {
                    resolve((<IPersonaFisica>res.data));
                }).catch(err => reject(err));
        });
    }

    public retrieveByReniecyt(numeroReniecyt: string): Promise<IPersonaFisica> {
        return new Promise<IPersonaFisica>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + '/reniecyt/' + numeroReniecyt)
                .then(function (res) {
                    resolve((<IPersonaFisica>res.data));
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    public retrieveByLogin(correoUsuario: string): Promise<IPersonaFisica> {
        return new Promise<IPersonaFisica>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + '/personas/' + correoUsuario)
                .then(function (res) {
                    resolve((<IPersonaFisica>res.data));
                }).catch(err => reject(err))
        });
    }
}