import http from '../http-common';


class LoginService  {

    login(credentials) {
        return http.post('/login', credentials); //trigger REST API and return promise
    }
}

export default new LoginService();