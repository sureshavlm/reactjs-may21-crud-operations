import http from '../http-common';

class TutorialService {

    getAll() {
        //get all tutorials from REST API and send it to components
        return http.get('/tutorials');
    }

    create(tutorial) {
        return http.post('/add', tutorial);
    }

    update(_updatedTutorial) {
        return http.put('/update', _updatedTutorial);
    }

    delete(tutorialsId) {
        return http.delete('/delete/' + tutorialsId);
    }
}

export default new TutorialService();