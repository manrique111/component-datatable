import {Component, OnInit} from '@angular/core';
import {DataTableService} from "./datatable/datatable.service";
import {AccionEmiter, AccionEmiterEnum, Headers, Setting, TableIconsModel} from "./datatable/datatable.interface";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'datatable';
    dataRecords: any[] = [];
    headers: Headers[] = [
        {title: 'Id', fieldName: 'id'},
        {title: 'Name', fieldName: 'name'},
        {title: 'Job', fieldName: 'job'},
        {title: 'Salary', fieldName: 'salary', isMoneda: true}
    ];
    config: Setting = {
        hasActions: true,
        actions: new TableIconsModel(true, true, true, true)
    };

    constructor(private servicio: DataTableService) {

    }

    ngOnInit() {
        this.dataRecords = this.servicio.data;
    }

    actionsButtonTables(objeto: AccionEmiter) {
        switch (objeto.nombre) {
            case AccionEmiterEnum.DELETE:
                alert("Delete");
                break;
            case AccionEmiterEnum.VIEW:
                alert("View");
                break;
            case AccionEmiterEnum.EDIT:
                alert("Edit");
                break;
        }
    }

}
