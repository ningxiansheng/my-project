import {Dispatcher} from 'flux'
import store from './store'
const listDispatcher = new Dispatcher()

listDispatcher.register((action) => {
    switch (action.actionType) {
        case "Add":
            store.addList(action.data)
        break;
        case "Del":
            store.delOne(action.data)
        break;
    }
})


export default listDispatcher;