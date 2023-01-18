import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:5000/api/Employees';
const INSERT_REST_API_URL = 'http://localhost:5000/api/Employees';
const GETBYID_REST_API_URL = 'http://localhost:5000/api/Employees';
const UPDATE_REST_API_URL = 'http://localhost:5000/api/Employees';
const DELETE_REST_API_URL = 'http://localhost:5000/api/Employees';

class CRUDServices {

    getAllDetails(){
        return axios.get(USERS_REST_API_URL);
    }

    InsertEmployee(Employee){
        return axios.post(INSERT_REST_API_URL,Employee);
    }

    getById(id){
        return axios.get(GETBYID_REST_API_URL+"/"+id);
    }
    updateEmployee(Employee, id){
        return axios.patch(UPDATE_REST_API_URL + '/' + id, Employee);
    }

    deleteEmployee(id){
        return axios.delete(DELETE_REST_API_URL + '/' + id);
    }
  
}

export default new CRUDServices();