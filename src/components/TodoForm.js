import { Component, React } from "react";

export class TodoForm extends Component{


constructor(){
    super();
    this.state={
        title:'',
        responsible:'',
        description:'',
        priority:'low'
        };

    this.handleInput=this.handleInput.bind(this); //bindea la funcion con el componente
    this.handleSubmit=this.handleSubmit.bind(this);
    
}

handleInput(e){
    const {value, name}= e.target;
    this.setState({
        [name]: value
    });

}

handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
}

    render(){
        return (
            <div>
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group mb-2">
                            <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group mb-2">
                            <select name="priority" className="form-control" onChange={this.handleInput}>
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" >Save</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default TodoForm;