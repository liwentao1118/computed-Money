import React from 'react'
import ReactDOM from 'react-dom'

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
    constructor(){
        super()
        this.state=({
            money:0
        })
    }

    handleInputChange=(e)=>{
        let money = e.target.value;
        this.setState({
            money:money.substring(0,6).replace(/[^\d]+/,'')
        })
    }
    render(){
        return (
            <div>
                <h2>付款计算器</h2>
                <fieldset>
                    <legend>请输入金额</legend>
                    <input type="text" value={this.state.money} onChange={this.handleInputChange}/>
                </fieldset>
                <BuySomething money={this.state.money}></BuySomething>
            </div>
        )
    }
}


ReactDOM.render(
    <MoneyInput/>
    ,document.getElementById('root')
)