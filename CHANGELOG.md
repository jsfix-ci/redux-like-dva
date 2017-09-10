# CHANGELOG

## Version 1.0.3

1. Simplify the judgment statement

```javascript
if( domain === namespace && !!handler ){
return handler( state, action );
}else{
return state;
}
```

now it is like below

```javascript
return domain === namespace && !!handler ? handler(state, action) : state;
```

2. `initStore` function can be load extra data now, the loaded data must be saved by using store.getState(), the extra will cover your defintion init state data

```javascript
const redux_dva = require('redux-like-dva');
redux_dva.add(require('any_model.js'));
const data = JSON.parse(fs.readFile(/*your data file*/));
const store = redux_dva.initStore(data);
```

## Version 1.0.1
Add subscriptions field, this field's content will be execute auto after load all reducers and sagas
