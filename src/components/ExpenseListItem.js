import React from 'react'; 
import {Link} from 'react-router-dom'; 
 


export default class ExpenseListItem extends React.Component {

    constructor(props){
        super(props); 
        //console.log('Item props', this.props); 
        //let {description, note, amount} = this.props; 
        //console.log(description +  note + amount); 
    }


    render(){

        return (
            <div>
                <Link to={`/edit/${this.props.id}`}>
                    <h3>{this.props.description}</h3>
                </Link>
                <p> {this.props.amount} - {this.props.createdAt}</p>
                
            </div>
        ); 
    }
}

/* const mapStateToProps = (state) => {
    return {
        expenses : state.expenses
    }
} */

