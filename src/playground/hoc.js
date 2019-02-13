// HIGH Order Component (HOC)

import React from 'react'; 
import ReactDom   from 'react-dom'; 
import InfoChild from './hocCild';


export default class Info extends React.Component {

   
    constructor(props) {
        super(props); 
    }


    render (){
        return (
            <div>
                <h1>Info </h1>
                <InfoChild {...this.props} />
            </div>
        )
    }


}