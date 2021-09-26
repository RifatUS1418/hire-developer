import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './Developer.css';

const Developer = (props) => {
    const { img, name, age, role, rating, salary } = props.developer;
    const element = <FontAwesomeIcon icon={faMoneyBill} />
    return (
        <div className="developer">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <h2 className="name">Name: {name}</h2>
            <p>Role: {role}</p>
            <p><small>Rating: {rating}</small></p>
            <p>Age: {age}</p>
            <p>Salary per/hr: ${salary}</p>
            <button onClick={() => props.handleAddToSelect(name, salary)} className="btn-select">{element} Hire</button>
            <div className="icon"><i className="fab fa-facebook-square"></i> <i className="fab fa-linkedin"></i></div>
        </div>
    );
};

export default Developer;