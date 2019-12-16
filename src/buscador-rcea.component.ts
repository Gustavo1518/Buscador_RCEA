import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import bAlert from "bootstrap-vue/es/components/alert/alert";
import { Component, Prop, Vue } from "vue-property-decorator";
import rceaService from "./rcea.service";
import { IPersonaFisica } from "./model/persona-fisica.model";

library.add(faSearch, faTimesCircle); // agrega el icono de lupa && el icono de exit

export class Options {
    constructor(public host?: string) { }

}
let defaultConfig = new Options();
export { defaultConfig };

@Component({
    components: {

        "font-awesome-icon": FontAwesomeIcon,
        "b-alert": bAlert
    }
})
export default class Buscadorrcea extends Vue {

    @Prop()
    readonly value!: IPersonaFisica;

    public dismissCountDown = 0;
    public alertType = '';
    public alertMessage = '';

    public searchKey: string = '';
    public isSearching: boolean = false;

    public get options(): Options {
        return (<any>this).$CVU_SEARCHER_DEFAULT_OPTIONS || defaultConfig;
    }

    public search() {
        if (this.searchKey) {
            this.isSearching = true;
            new rceaService(this.options.host)
                .retrieveByCvu(this.searchKey)
                .then(pf => {
                    this.$emit('input', pf);
                    this.searchKey = '';
                    this.isSearching = false;
                })
                .catch(() => {
                    this.alertType = 'warning';
                    this.alertMessage = `No se encontró a la persona con RCEA ${this.searchKey}`;
                    this.dismissCountDown = 5;
                    this.isSearching = false;
                });
        }
    }

    public searchButtonDisabled() {
        return this.searchKey && this.isSearching;
    }

    public clear() {
        return this.searchKey = '';
    }
} 