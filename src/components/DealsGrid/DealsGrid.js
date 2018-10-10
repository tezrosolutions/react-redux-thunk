import React, { Component } from 'react';
import './DealsGrid.css';
import Deal from './Deal'
import { loadPage } from '../../actions';

class DealsGrid extends Component {
    constructor(props) {
        super(props);
        this.handlePageLoad = this.handlePageLoad.bind(this);
    }

    handlePageLoad = (e) => {
        e.preventDefault();
        let offset = this.props.page.offset + 10;
        this.props.loadPage(this.props.page.page++, offset);
    }

    render() {
        const projects = this.props.page.projects.map((deal, i) =>
            <Deal key={i} name={deal.name} stage={deal.stage} dateClosed={deal.dateClosed} owner={deal.owner} value={deal.value} />
        );
        return (
            <div className="datagrid-container">
                <div className="row datagrid-row">
                    <div className="col-sm-3 datagrid-title datagrid-cell">
                        <span>DEAL NAME</span>
                    </div>
                    <div className="col-sm-2 datagrid-title datagrid-cell">
                        <span>DEAL STAGE</span>
                    </div>
                    <div className="col-sm-2 datagrid-title datagrid-cell">
                        <span>CLOSE DATE</span>
                    </div>
                    <div className="col-sm-3 datagrid-title datagrid-cell">
                        <span>DEAL OWNER</span>
                    </div>
                    <div className="col-sm-2 datagrid-title datagrid-cell">
                        <span>DEAL AMOUNT</span>
                    </div>
                </div>
                {projects}

                <a className="btn-load-more" onClick={this.handlePageLoad}>Load More Projects</a>
            </div>

        );
    }
}

export default DealsGrid;


