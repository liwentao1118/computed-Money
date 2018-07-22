import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state=({
            unit:'rmb',
            money:0
        })
    }
    handleRmbChange=(money)=>{
        this.setState({
            unit:'rmb',
            money:money
        })
    }
    handleUsdChange=(money)=>{
        this.setState({
            unit:'usd',
            money:money
        })
    }
    toRmb(money){
        return money*6.7
    }
    toUsd(money){
        return money/6.7
    }
    convert=(converter,money)=>{
        return  Math.round(converter(money)*1000)/1000

    }
    render(){
        let money = this.state.money
        let unit = this.state.unit
        let rmb = unit === 'rmb'?money:this.convert(this.toRmb,money)
        let usd = unit === 'usd'? money:this.convert(this.toUsd,money)
        return (
            <div>
                <h2>付款计算器</h2>
                <MoneyInput unit='rmb' money={rmb} onMoneyInput={this.handleRmbChange} ></MoneyInput>
                <MoneyInput unit='usd' money={usd} onMoneyInput={this.handleUsdChange}></MoneyInput>
                <BuySomething money={money}></BuySomething>
            </div>
        )
    }
}
const unitName ={
    rmb:'人民币',
    usd:'美元'
}

function BuySomething(props){
    let money = parseFloat(props.money)
    if (Number.isNaN(money)){
        return <p>金额输入有误</p>
    }
    if (money>=10){
        return <p>购买成功,找零:¥{money-10}</p>
    } else{
        return <p>购买失败,金额:¥{money}</p>
    }
}

class MoneyInput extends React.Component{


    handleInputChange=(e)=>{
        let money = e.target.value;
       money = money.substring(0,6).replace(/[^.\d]+/,'')
        this.props.onMoneyInput(money)

    }
    render(){
        return (
            <div>
                <fieldset>
                    <legend>请输入金额({unitName[this.props.unit]})</legend>
                    <input type="text" value={this.props.money} onChange={this.handleInputChange}/>
                </fieldset>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>
    ,document.getElementById('root')
)