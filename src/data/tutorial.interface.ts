export interface Tutorial {
    titulo: string;
    descricao: string;
    etapas: Etapa[];
}

export interface Etapa {
    subtitulo: string;
    descricao: string;
}