import React from 'react';

export default class This extends React.Component {
  constructor(props) {
    super(props);
    console.log('props',props,typeof(props));
    aa = 1;
    // console.log('props]',this.props,typeof(this.props))
    this.state = {
      throlle1: true,
      reuse: false,
      value:'这里是默认值' ,
      a:0,
      b:0,
    };
  }

  changeBtnstatus = () => {
    console.log('方法中的this', this);
    // 等待动画完成替换文案
    if (this.state.throlle1) {
      this.setState(() => ({
        throlle1: false
      }));
      setTimeout( () => {
        console.log('箭头函数倒计时中的this', this);
        this.setState({
          reuse: true,
        });
      }, 1000);
      setTimeout( function(){
        console.log('非箭头函数倒计时中的this', this);
        // this.setState({
        //   reuse: true,
        // });
      }, 1000);
    }
  };
   test = () => {
     let i = 0;
     let a = 2
     if (i === 0) {
       if (a === 2) {
        // console.log('a=2');
        return;
       }
      //  console.log('i=0');
     }
    //  console.log('这里是i不为0的情况')
   }
   nextText = () => {
    //  console.log('这里是test下面的函数');
     this.textThis()
   }
   textThis = () => {
     console.log('这里是textThis中的this',this)
   }
   changeInput = (key,e)=> {
    //  console.log(e);
    //  console.log(e.target.tagName,'zhelu shi ')
     let val = e.target.value
     this.setState({
       [key]: val
     })
   }
   changeColor = ()=> {
     this.refs.d.style.color = 'red'
   }
   child = () => {
    console.log('chid',React.Children)
    React.Children.map(i =>{
      console.log('Children',i.lenght)
    })
    console.log(this.props.children)
  }

   componentDidMount() {
     this.changeBtnstatus();
    //  this.test();
    //  this.nextText();
     this.child();
   }
   render() {
     const {value,a,b} = this.state;
     let abcd = this.props.this;
     abcd = 'abcd'
     return (
       <div>
         <input type="text" value={a} onChange={e=>{this.changeInput('a',e)}}/>
         <input type="text" value={b} onChange={e=>{this.changeInput('b',e)}}/>
         {a+b}
         <div className="aa" ref='d'  onClick={this.changeColor}>{this.props.this}</div>
         <div className="aa" ref='d'  onClick={this.changeColor}>{abcd}</div>
       </div>
     );
   }
}