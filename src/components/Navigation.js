import React, { Component } from 'react'

export class Navigation extends Component {




    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a href="#" className="text-white">
                            {
                                this.props.titulo
                            }
                        </a>
                    </div>          
                </nav> 
            </div>
        )
    }
}

export default Navigation
