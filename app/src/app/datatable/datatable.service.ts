import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataTableService {

    data = [
        {
            id: 1,
            name: 'Juan Perez',
            job: 'Programador',
            salary: 100
        }, {
            id: 2,
            name: 'Tito Junco',
            job: 'Plomero',
            salary: 200
        }, {
            id: 3,
            name: 'Roberto Casto',
            job: 'Intendente',
            salary: 250
        }, {
            id: 4,
            name: 'Agustin Bernal',
            job: 'Plomero',
            salary: 90
        }
    ]



    constructor() {
    }


}
