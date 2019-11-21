import React, { Component } from 'react'
import action from './flux/action';

export default class Left extends Component {
   
    add(){
        let name = this.refs.name.value.trim();
        let content = this.refs.content.value.trim();
        action.addList({
            name:name,
            content:content
        })
        this.refs.name.value = this.refs.content.value = ""
    }
    render() {
        return (
            <div className="left">
                <input type="text" ref="name"/>
                <br/>
                <input type="text" ref="content"/>
                <br/>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}
