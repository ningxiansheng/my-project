import React, { Component } from 'react'
import store from './flux/store'
import action from './flux/action'

export default class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: store.getList()
        }
        this.getList = this.getList.bind(this)
    }
    componentDidMount(){
        store.addListener(this.getList)
    }
    getList(){
        const list = store.getList()
        this.setState({list})
    }
    del(i){
        action.del(i)
    }
    render() {
        return (
            <div className="right">
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>
                                <p>{item.name}说：<span>{item.content}</span></p>
                                <span onClick={this.del.bind(this,index)}>删除</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
