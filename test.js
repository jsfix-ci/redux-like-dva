const dvaStore = require('./index.js');

const model = {
  namespace:'book',
  state:[],
  reducers:{
    add(state, {payload}){
      return [...state, payload]
    },
  },
  effects:{
    *find({index}, {select}){
      const books = yield select(state => state.book);
      const book = books[index|0];
      console.log('Find Book',book);
    }
  },
  subscriptions:{
    async setup(){
      await console.log('it is auto start!')
    }
  }
}

const book1 = {id:'book1', title:'My Book 1', author:'aokihu'};
const book2 = {id:'book2', title:'My Book 2', author:'aokihu14'};
const book3 = {id:'book3', title:'my Book 3', author:'aokihu16'};

dvaStore.add(model);
const store = dvaStore.initStore();
console.log('Init State', store.getState().book)
store.dispatch({type:'book/add', payload:book1});
store.dispatch({type:'book/add', payload:book2});
store.dispatch({type:'book/add', payload:book3});
console.log('Changed State',store.getState().book)
store.dispatch({type:'book/find', index:1})
