export interface DataTableInterface {

}

export interface Headers {
    title: string;
    fieldName?: any;
    isMoneda?: boolean;
    isDate?: boolean;
}

export interface Setting {
    hasActions?: boolean;
    actions?: TableIconsModel;
}

export class TableIconsModel {

    edit = false;
    view = false;
    deleted = false;
    checkbox = false;

    constructor(
        edit?: boolean,
        deleted?: boolean,
        view?: boolean,
        checkbox?: boolean,
    ) {
        edit && (this.edit = edit);
        view && (this.view = view);
        deleted && (this.deleted = deleted);
        checkbox && (this.checkbox = checkbox);
    }
}

export interface AccionEmiter {
    nombre: AccionEmiterEnum;
    data: any
}


export enum AccionEmiterEnum {
    EDIT = "Editar",
    DELETE = 'Eliminar',
    VIEW = 'Mostrar'
}