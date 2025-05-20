import { criarUsuarioComEmailSenha, loginUsuarioComEmailSenha } from "../services/index.js";

const usersController = {
    criarLoginFirebase(email, password) {
        return new Promise((resolve, reject) => {
            criarUsuarioComEmailSenha(email, password)
                .then(
                    (credencial) => {
                        resolve(credencial);
                    }
                )
                .catch(
                    (erro) => {
                        reject(erro);
                    }
                )
        })
    },
    
    fazerLoginFirebase(email, password) {
        return new Promise((resolve, reject) => {
            loginUsuarioComEmailSenha(email, password)
                .then(
                    (credencial) => {
                        resolve(credencial);
                    }
                )
                .catch(
                    (erro) => {
                        reject(erro);
                    }
                )
        })
    }
}

export default usersController;