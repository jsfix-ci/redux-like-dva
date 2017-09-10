const dvaStore = require('./index.js');

const model = {
  namespace:'test',
  state:{
    text:'Hello world!'
  },
  reducers:{
    update(state, {payload}){
      return Object.assign(state, {text:payload})
    }
  },
  effects:{

  },
  subscriptions:{
    async setup(){
      await console.log('it is auto start!')
    }
  }
}

dvaStore.add(model);
const store = dvaStore.initStore();
console.log(store.getState().test)
store.dispatch({type:'test/update', payload:'Bye bye!!!'})
console.log(store.getState().test)
