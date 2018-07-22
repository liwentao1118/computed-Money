import React from 'react';
import ReactDOM from 'react-dom';

function BuySomething(props){
    if(props.money >= 10){
        return <p>购买成功! 金额: ￥{props.money}, 找零: ￥{props.money - 10}</p>
    }

    return <p>购买失败, 金额: ￥{props.money}</p>
}


ReactDOM.render(
    <BuySomething money={6}/>,
    document.getElementById('root')
);