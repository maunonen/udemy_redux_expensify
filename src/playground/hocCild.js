// HIGH Order Component (HOC)

import React from 'react'; 
import ReactDom   from 'react-dom'; 


export default class InfoChild extends React.Component {

   constructor(props){
       super(props)
   }

    render (){
        return (
            <div>
                <h1>Info </h1>
                <p> {this.props.props1} </p>
                <p> {this.props.props2} </p>
                <p> {this.props.props3} </p>
            </div>
        )
    }


}