import { Component, React } from "react";

export class TodoForm extends Component{

    render(){
        return (
            <div>
                <div className="card">
                    <form className="card-body">
                        <div className="form-group mb-2">
                            <input type="text" name="title" className="form-control" placeholder="Title"/>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="responsible" className="form-control" placeholder="Responsible"/>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" name="description" className="form-control" placeholder="Description"/>
                        </div>
                        <div className="form-group mb-2">
                            <select name="priority" className="form-control">
                                <option>low</option>
                                <option>medium</option>
                                <option>higth</option>
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