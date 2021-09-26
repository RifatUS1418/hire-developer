import React from 'react';
import './Select.css';

const Select = (props) => {
    const { select, salary } = props;
    const totalSalary = salary.reduce((previous, salary) => previous + salary, 0);
    return (
        <div className="select">
            <h3>Developer: {select.length}</h3>
            <h3>Total cost per/hr: ${totalSalary}</h3>
        </div>
    );
};

export default Select;