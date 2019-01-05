import React, { Fragment } from 'react';
import { Button } from 'antd';

class Example extends React.Component{
  state={
    count:0
  }
  handleCrease = () =>{
     this.setState((prevState)=>{
        ++prevState.count;
     })
  }
  render(){
    return(
      <Fragment>
         <div style={{fontSize:"32px",textAlign:'center'}}> {`JUST TEST IT${this.state.count}`}</div> 
         <Button onClick={this.handleCrease}>增加</Button>
      </Fragment>
    )
  }
}
export default Example;