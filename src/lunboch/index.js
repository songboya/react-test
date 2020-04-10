import React, { Component } from 'react';
import './index.less'
export default class Lunboch extends Component {
    // direction = 1;
    constructor(props) {
        super(props);
        this.state = {
            oneleft:0,
            twoleft:7.5,
            trleft:14,
            showNow:Number(this.props.showidx), 
            direction:1  
        }
        this.changLeft = this.changLeft.bind(this);
        

    }
    // 子向父组件传值
    change(value) {
        this.props.onValue(value)
    }
    changLeft(){

       this.setState({
           oneleft:7.5,
           twoleft:0
       })
    }
    
    componentDidMount() {
    }
    render() {
        const { number, islunbo, onValue ,} = this.props;
        
        const {oneleft,twoleft, trleft} = this.state;
        return (<div className="total">
            {number}
            <div onClick={this.change.bind(this, 3)}>子向父组件传值</div>
            <div className="father">
                <div className="container" style={{width:3*7.5+'rem'}} onClick={this.changLeft}>
                <div className="one-div div" style={{left:oneleft+'rem'}}></div>
                <div className="two-div div" style={{left:twoleft+'rem'}}></div>
                <div className="tr-div div" style={{left:trleft+'rem'}}></div>
                </div>
            </div>
        </div>)
    }
}