import * as React from 'react';
import "./breadcrumb.css";
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IBreadcrumbProps extends RouteComponentProps {
}

const Breadcrumb: React.FC<IBreadcrumbProps> = (props) => {
    return (
        <div className="breadcrumb">
            {props.location.pathname.replace('/', '').replace(/\//gi, ' - ')}
        </div>
    );
}

export default withRouter(Breadcrumb)
