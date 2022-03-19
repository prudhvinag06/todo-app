import axios from "axios";


class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:9090/hello-world')
        //console.log('executed Service')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:9090/hello-world-bean')
        //console.log('executed Service')
    }

    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:9090/hello-world-bean/path-variable/${name}`)
        //console.log('executed Service')
    }
}

export default new HelloWorldService();