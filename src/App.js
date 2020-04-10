import React from 'react';
import logo from './logo.svg';
import './App.css';
// import This from './this/index';
import Tab from './tabQie/index';
import axios from 'axios';
import Lunbo from './lunbo/index';

export default class App extends React.Component{
  constructor(props){
    super(props);
    // this.props.children = 'aa'
   
    console.log('这里是App中的props',props)
  }

  child = () => {
    React.Children.map(i =>{
      if (i === null) {
        console.log('null')
         return
      } 
      console.log( 1123)
    })
  }
  componentDidMount(){
    this.child();
    axios.get('http://localhost:9000/users')
    .then(res => {
      console.log(res,'res');
    })
  }
  render() {
    return (
     <div>ddd
       {/* <This this = {'aa'}></This> */}
       <Tab />
       <Lunbo />
       </div>
    )
  }
}

