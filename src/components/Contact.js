import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



function Contact(props) {
    return (
        <div className="Contact">
                <img className="avatar" src={props.avatar} alt={props.name} />
                <div>
                    <h4 className="name">{props.name}</h4>
                    <div className="status"> 
                        <p className="status-text">                 
                        <span className={props.online ? "status-online" : "status-offline"}></span> {props.online ? "online" : "offline"}</p>
                    </div>
                </div>
        </div>
    )

}
Contact.propTypes = {
    name: PropTypes.string,
    online: PropTypes.bool,
    avatar : PropTypes.string,

}
export default Contact;