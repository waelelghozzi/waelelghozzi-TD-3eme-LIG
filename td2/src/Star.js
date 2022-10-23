import { findByLabelText } from '@testing-library/react';
import React from 'react';
class Star extends React.Component{
    constructor(props){
        super(props);
        this.state = {on:false};
        this.handleClick=this.handleClick.bind(this);
    }
   
    handleClick(){
        
            this.setState({on:true});}  
        render(){
        
          return(
                    
                    <img src = {this.state.on ? process.env.PUBLIC_URL+ 'star_on.png':
                process.env.PUBLIC_URL +'star_off.png'}
                onClick={this.handleClick}
                />
                
                );
            

    }}
    
    

export default Star
