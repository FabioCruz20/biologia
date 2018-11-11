export interface Quiz {
    titulo: string;
    questoes: Questao[];
}

export interface Questao {
    enunciado: string;
    alternativas: Alternativa[];
}

export interface Alternativa {
    texto: string;
    correta: boolean;
}