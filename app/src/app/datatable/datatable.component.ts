import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";
import {AccionEmiter, AccionEmiterEnum, Headers, Setting} from "./datatable.interface";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit, OnDestroy, OnInit {

  dtOptions: DataTables.Settings[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, {static: false})
  dtElement!: DataTableDirective;

  // * Inputs
  @Input() headers!: Headers[];
  @Input() settings!: Setting;
  @Input() loading!: boolean;
  dataRecords: any[] = [];
  selectedCheckboxs: any[] = [];

  @Input()
  set DataRecords(dataRecords: any) {
    this.dataRecords = dataRecords;
  }

  // * Emitters
  @Output() actionsButtonTables = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

    this.dtOptions[10] = {
      responsive: true,
      searching: true,
      info: false,
      paging: true,
      order: [1, 'false'],
      ordering: true,
      columnDefs: [
        { targets: [0], orderable: false, className: 'sin_ordenar_custom' },
        { targets: ['__all'], orderable: true, className: 'ordenar_custom' },
      ]
    };

  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  render(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  }

  btnEditClick(objeto: any) {
    this.sendEmitter(objeto, AccionEmiterEnum.EDIT);
  }

  btnDeleteClick(objeto: any) {
    this.sendEmitter(objeto, AccionEmiterEnum.DELETE);
  }

  btnViewClick(objeto: any) {
    this.sendEmitter(objeto, AccionEmiterEnum.VIEW);
  }

  sendEmitter(objeto: any, accion: AccionEmiterEnum) {
    let objeto_custom: AccionEmiter = {
      data: objeto,
      nombre: accion
    }
    this.actionsButtonTables.emit(objeto_custom);
  }

  tamanoOpciones () {
    let contador = 1;
    let clase = `icon2`;
    if (this.settings.actions?.checkbox) {
      contador +=1;
    }
    if (this.settings.actions?.edit) {
      contador +=1;
    }
    if (this.settings.actions?.deleted) {
      contador +=1;
    }
    if (this.settings.actions?.view) {
      contador +=1;
    }
    if (contador == 3) {
      clase = `icon3`;
    }
    if (contador == 4) {
      clase = `icon4`;
    }
    return clase;
  }

  asignarCheckbox(data: any, idx: number) {
    let objeto = {
      id: data,
      idx: idx,
      checkbox: true
    }
    if (this.selectedCheckboxs[idx]) {
      this.selectedCheckboxs[idx] = !this.selectedCheckboxs[idx]
    } else {
      this.selectedCheckboxs[idx] = true;
    }
  }

}
