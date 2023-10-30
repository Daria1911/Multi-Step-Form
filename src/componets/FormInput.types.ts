export interface FormInputValue {
    value: string;
    isValid: boolean;
    field: string;
}

export enum FormInputType {
    TEXT = "TEXT",
    PASSWORD = "PASSWORD"
}
