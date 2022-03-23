import axios from "axios";



class todoDataService{
    retriveAllTodos(name){
        return axios.get(`http://localhost:9090/users/${name}/todos`)
        //console.log('executed Service')
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:9090/users/${name}/todos/${id}`)
        //console.log('executed Service')
    }

    retriveTodo(name, id){
        return axios.get(`http://localhost:9090/users/${name}/todos/${id}`)
        //console.log('executed Service')
    }

    updateTodo(name, id, todo){
        return axios.put(`http://localhost:9090/users/${name}/todos/${id}`, todo)
        //console.log('executed Service')
    }

    createTodo(name, todo){
        return axios.post(`http://localhost:9090/users/${name}/todos/`, todo)
    }


}

export default new todoDataService();
