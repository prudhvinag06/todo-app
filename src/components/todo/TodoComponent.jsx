import React,{Component} from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import todoDataService from "../../api/todo/todoDataService";
import AuthenticationService from './AuthenticationService.js';



class TodoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            //this.props.params.id should be used
            id : this.props.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    onSubmit(values) {
        if (this.state.id == -1) {
            let username = AuthenticationService.getLoggedInUserName();
            todoDataService.createTodo(username, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(
                () => {
                    this.props.navigate(`/todos`)
                }
            )
            console.log(values)
        } else {
            let username = AuthenticationService.getLoggedInUserName();
            todoDataService.updateTodo(username, this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(
                () => {
                    this.props.navigate(`/todos`)
                }
            )
            console.log(values)
        }
    }
    //automatically executes
    componentDidMount(){
        if(this.state.id == -1)
        return;

        todoDataService.retriveTodo(AuthenticationService.getLoggedInUserName(), this.state.id)
        .then(response => {
            this.setState({description : response.data.description, targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')})
        })
    }
    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length < 5)
            errors.description = 'Enter atleast 5 characters'
        
        if(!moment(values.targetDate).isValid){
            errors.targetDate = 'Enter a valid Target Date'
        }
        console.log(values)
        return errors
    }
    render(){
        let description = this.state.description;
        let targetDate = this.state.targetDate;
        return <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                    initialValues={{description : description, targetDate : targetDate}}
                    onSubmit = {this.onSubmit}
                    validate={this.validate}
                    enableReinitialize = {true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name = "description" component ="div" className="alert alert-warning"/>
                                    <ErrorMessage name = "targetDate" component ="div" className="alert alert-warning"/>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type = "text" name = "description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type = "date" name = "targetDate"/>
                                    </fieldset>
                                    <button className = "btn btn-success"type="submit"> Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            {/* Todo Component for id : {this.props.params.id} */}
            
            </div>
    }
}

export default TodoComponent;