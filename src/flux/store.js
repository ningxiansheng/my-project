import {EventEmitter} from 'events'

const store = {
    list:[
        {
            name: "张三",
            content: "123"
        }
    ],
    getList(){
        return this.list
    },
    addList(obj){
        this.list.push(obj)
        this.emit()
    },
    delOne(i){
        this.list.splice(i,1)
        this.emit()

    },
    addListener(callback){
        EventEmitter.prototype.on("change",callback)
    },
    emit(){
        EventEmitter.prototype.emit("change")
    }
}
export default store