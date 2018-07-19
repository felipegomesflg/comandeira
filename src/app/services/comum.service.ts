import { version } from 'punycode';
import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs/Subject';

export const  config = 'http://10.0.0.142:3000';
export const  restAPI = 'http://10.0.0.75/mdc.restapi/m7api.svc/v2';
@Injectable()
export class ComumService {


    menuToggle = new EventEmitter<boolean>();
    constructor() {
    }

    userLang = navigator.language;

    sep = this.userLang == "pt-BR" ? ',' : '.';
    
    loading = '';

    
}

