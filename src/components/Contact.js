import React from 'react';
import './Contact.css';



function Contact() {
    return (
        <div className="Contact">
                <img className="avatar" src="https://lh3.googleusercontent.com/proxy/q-chm50LObc1gbrVAvAdhtco8zRKuZxdzLbH9soVbntae_ucJ1pW4Ev5C_aKKlVyeAtv-XPUM26Uu1nXxd5bE8Tal7jRlt-43S98stRvLNHGLB0RhQ" alt="walter" />
                <div>
                    <h4 className="name">Walter White</h4>
                    <div className="status"> 
                        <p className="status-text"> <span className="status-online"></span> Online</p>
                    </div>
                </div>
        </div>
    )

}

export default Contact;