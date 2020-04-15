import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



// function Contact(props) {
//     return (
//         <div className="Contact">
//                 <img className="avatar" src={props.avatar} alt={props.name} />
//                 <div>
//                     <h4 className="name">{props.name}</h4>
//                     <div className="status"> 
//                         <p className="status-text">                 
//                         <span className={props.online ? "status-online" : "status-offline"}></span> {props.online ? "online" : "offline"}</p>
//                     </div>
//                 </div>
//         </div>
//     )

// }
// Contact.propTypes = {
//     name: PropTypes.string,
//     online: PropTypes.bool,
//     avatar : PropTypes.string,

// }


//   conversion d'une function en class


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online

        }
    }

    render() {

        const { avatar, name, online } = this.props

        return (
            <div className="Contact">
                <img className="avatar" src={avatar} alt={name} />
                <div>
                    <h4 className="name">{name}</h4>
                    <div className="status">
                        <div className="status-text">



                            <div className={this.state.online ? "status-online" : "status-offline"} >
                            </div>
                            <button onClick={() => {
                                const newOnline = !this.state.online
                                this.setState({ online: newOnline })
                            }}>{this.state.online ? "online" : "offline"} </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


    //                         <span className={this.state.favorite ? "is-favorite" : ""} onClick={event => {
    //                             const newFavorite = !this.state.favorite
    //                             this.setState({favorite: newFavorite})
    //                             console.log(this.state.favorite)

    //                         }}>&#9733;</span>



}

Contact.propTypes = {
    name: PropTypes.string,
    online: PropTypes.bool,
    avatar: PropTypes.string,

}




export default Contact;








//                        exemple de class 

// class QuoteCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             favorite: false,
//         };
//     }
//     render() {
//         return (
//             <figure className="QuoteCard">
//                 <img src={this.props.image} alt={this.props.character} />
//                 <figcaption>
//                     <blockquote>{this.props.quote}</blockquote>
//                     <p>
//                         <cite>{this.props.character}</cite>






//                         <span className={this.state.favorite ? "is-favorite" : ""} onClick={event => {
//                             const newFavorite = !this.state.favorite
//                             this.setState({favorite: newFavorite})
//                             console.log(this.state.favorite)

//                         }}>&#9733;</span>







//                     </p>
//                 </figcaption>
//             </figure >
//         );
//     }
// }






