import React from "react";
import '../count.css'
class Counter extends React.Component{
render(){
this.state={
count:0
};

  
    return(
        <div>
               <div>{this.state.count}</div>
               <button onClick={()=>{this.setState({count : this.state.count+1})}}>click</button>
        </div>
    );
}
}
export default Counter;