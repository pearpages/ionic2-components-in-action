import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl
} from '@angular/forms';


@Component({
    selector: 'page-radios',
    templateUrl: 'radios.html'
})
export class RadiosExample {

    langs;
    langForm;

    constructor() {
        this.langForm = new FormGroup({
            "langs": new FormControl('go')
        });
    }
}
