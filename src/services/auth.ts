import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthService {

    /**
     * Obtém informações da conta atualmente conectada.
     * Útil para obter o uid usado em consultas.
     */
    getActiveUser() {
        return firebase.auth().currentUser;
    }

    /**
     * Chamado na página de formulário de cadastro.
     * Cria uma conta com o email e a senah fornecidos
     * @param email 
     * @param password 
     */
    signup(email: string, password: string) {
        return (
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        );
    }

    /**
     * Autentica usuário com as credenciais fornecidas
     * @param email 
     * @param password 
     */
    login(email: string, password: string) {
        return (
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
        );
    }

    logout() {
        firebase.auth().signOut();
    }
    
}