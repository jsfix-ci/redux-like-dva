# redux-like-dva
When I used the dva project, I had a great interest in its store management approach, and I have never used React to develop projects before, and have not come into contact with Redux and Saga, but have been developed by using dva My first react after the application, dva on the Store preparation method greatly stimulated me, and I would like to separate from the dva project, applied to the nodejs environment. But dva is a complete project, it seems that there is no intention to separate the opening of the Store management components, so I intend to imitate the management of the dva's management components to facilitate the use of independent

## Install

You can install this module with `npm`
```
npm install redux-like-dva
```
or use `yarn`
```
yarn add redux-like-dva
```

## Usage

First, you need write model file, you can see dva document at [here](https://github.com/dvajs/dva)

1. There is the model defintion, `model.js`

```javascript
{
  namespace:'book',
  state: [],
  reducers:{
    add(state, action){
      const {payload} = action;
      return state.push(payload)
    },
    remove(state, {index}){
      return state.splice(index, 1)
    }
  },
  effects:{
    *find(action , {select, put}){
      ...
    }
  },
  subscriptions:{
    setup(){
      console.log('this will be start auto');
    }
  }
}
```
`namespace` is the name of the special state, it is uniquie

`state` the initialize state data, it can be array or object

`reducers` user defintion reducer function

`effects` user definition saga function


2. Import Redux-like-dva and initialize store object

```javascript
// My project requires redux and saga, and install together
// so you don't need import redux and saga again
const redux_dva = require('redux-like-dva');

// require the model defintion
redux_dva.add(require('./model.js'));

// you can add model any times
redux_dva.add(require('any_model.js'))

// Initlizile the reduxe store
const myStore = redux_dva.initStore();

// Now you can do anything, like orginial redux store
// getState() is the native function of redux
// you can use all the functions of redux
const currentState = myStore.getState();

// currentState contain full state tree
// you should use the special node of the state in your module
const books = currentState.book;
console.log(books);

// you can dispatch action like orginal redux
// the keypoint is the namespace
// you have to point out which namespace is your target
myStore.dispatch(
  {
    type:'book/add',
    payload: {
      title: 'My Book',
      author: 'aokihu'
    }
  }
)

const books = myStore.getState().book;
console.log(books);

```
