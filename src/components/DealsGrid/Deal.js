import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Deal extends Component {
    render() {
        return (
            <div className="row datagrid-row">
                <div className="col-sm-3 datagrid-value datagrid-cell">
                    <span><a href="#">{this.props.name}</a></span>
                </div>
                <div className="col-sm-2 datagrid-value datagrid-cell">
                    <span>{this.props.stage}</span>
                </div>
                <div className="col-sm-2 datagrid-value datagrid-cell">
                    <span>{this.props.dateClosed}</span>
                </div>
                <div className="col-sm-3 datagrid-value datagrid-cell">
                    <span>{this.props.owner}</span>
                </div>
                <div className="col-sm-2 datagrid-value datagrid-cell">
                    <span>{this.props.value}</span>
                </div>
            </div>
        );
    }
}

export default Deal;

