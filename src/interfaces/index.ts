
export interface OperationInterface {
    fecha: string;
    dia: string;
    hora: string;
    status: string;
    resultado: number;
    img: string;   

}

export interface Registro {
    name: string;
    numOperaciones: number;
    porcentaje(): Promise<number>;
}