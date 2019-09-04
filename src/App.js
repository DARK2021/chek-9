 import React from 'react';
 class App extends React.Component{
  state ={
    value:"",
    tab:["checkpoint","blid","barcha"],
  }  
changeIt(input){
  this.setState({
    value : input
  },)

}
addToList(input){
  let tabArray=this.state.tab
  if(this.state.value!=""){
  tabArray.push(input);
  this.setState({
    tab: tabArray,
    value:""

  })}
}
styler(e){
  document.getElementById(e).style.textDecoration="line-through"
}
  render(){
    return( 
      <>
      <center>
      <input
      onChange={(e)=>this.changeIt(e.target.value)}
      value={this.state.value}/>
      <button
      onClick={()=>this.addToList(this.state.value)}
      >Add</button>
      <ul>
      {this.state.tab.map((value,index)=>(
         <li id={index} onClick={()=>{this.styler(index)}}>
         {value}
         </li> ))
      }
      </ul>
      </center> 
      </>
      )

  }
  }
  export default App;