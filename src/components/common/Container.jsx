import React from 'react';
import "../../css/Container.css";

const Container = ({children}) => {
    return (
        <div className="container primary-dark">
            {children}
        </div>
    );
}

export default Container;
