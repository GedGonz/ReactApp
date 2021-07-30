import React, { Component } from 'react'

export class Navigation extends Component {




    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a href="" className="text-white">
                            {
                                this.props.titulo
                            }
                            <span className="badge rounded-pill bg-light text-dark ml-2">
                                {this.props.count}
                            </span>
                        </a>
                        
                    </div>          
                </nav> 
            </div>
        )
    }
}

export default Navigation
