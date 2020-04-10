import React from 'react';
import Lunboch from '../lunboch/index';
import './index.less'
export default class Lunbo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 个数
            number: 3,
            checked:true,
            test:1,
            time:2,
            showidx:0
        }
        // 改变this的指向
        this.handleChange = this.handleChange.bind(this);
        this.isChangeLun = this.isChangeLun.bind(this);
        this.changeShow = this.changeShow.bind(this)
    };
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            number: e.target.value
        })
    }
    // 是否自动轮播
    isChangeLun(e){
        console.log(e.target.checked);
        const {checked} = this.state;
        this.setState({
            checked:e.target.checked
        })
    };
    // 改变自动播放的时间
    changeTime(e){
        this.setState({
            time:e.target.value
        })
    }
    ch(value){
        this.setState({
            test:value
        })
    }
    changeShow(e){
        this.setState({
            showidx:e.target.value
        })
    }
    componentDidMount() {
    }
    render() {
        const { number, checked,test, time, showidx} = this.state;
        console.log(checked,'checked');
        return (
            <div className="lunbo">
                
                {/* 子像父组件传值 */}
                {test}<br/>
                <input type="text" value={number} onChange={this.handleChange} />
                <label><input className="mui-switch mui-switch-anim" type="checkbox" onChange={this.isChangeLun} checked={checked}/></label><br/>
                <input type="text" value={showidx}onChange={this.changeShow} />
                {
                    
                    checked?<input type="text" value={time} onChange={this.changeTime} />:null
                }
                    <Lunboch number={number} islunbo={checked} onValue={this.ch.bind(this)} showidx={showidx} time={time}/>
         </div>
        );
    }
}