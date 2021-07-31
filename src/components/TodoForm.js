import { Component, React } from "react";

export class TodoForm extends Component{



handleInput(e){
    console.log(e.target.name);
}

    render(){
        return (
            <div>
                <div className="card">
                    <form className="card-body">
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