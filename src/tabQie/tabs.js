import React from 'react';


export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
console.log(props);
console.log(React.Children)


  }
  map = ()=>{
    React.Children.map(child =>{
        alert(child.props.activeIndex)
        // return child.props.activeIndex
    })
  }

  

  render() {
      const {activeIndex,i} = this.props
    // 这里切换 select 中的选项是没有作用的，因为使用的是 defaultActiveIndex，
    // 如果想要作用的话，要把 defaultActiveIndex 改成 activeIndex 就可以
    return (
      <div>
          {activeIndex}
          {React.Children.map(i, (child, index) => {
          // Ignore the first child
          console.log(index)
          return child
        })}
        {React.Children.forEach((child, index) => {
          // Ignore the first child
          console.log(index)
          return child
        })}
      </div>
    );
  }
}

