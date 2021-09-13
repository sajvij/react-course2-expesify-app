import {createStore} from "redux";

const incrementCount = ({incrementBy = 1}={}) =>({

    type: 'INCREMENT',
    incrementBy
    
});

const decrementCount = ({decrementBy = 1}={}) =>({

    type: 'DECREMENT',
    decrementBy
    
});
const Set = ({count}={}) =>({

    type: 'SET',
    count
    
});
const ReSet = ({ReSet = 0}={}) =>({

    type: 'RESET',
    ReSet
    
});

const countReducer=(state={count:0} ,action ) =>{
    console.log('running');
    switch(action.type)
    {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy:1
            return {
                count: state.count + incrementBy
            };
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy:1
                return {
                    count: state.count - decrementBy
                };
            case 'RESET':
                    return {
                        count: 0
                    };
            case 'SET':
                     return {
                         count: action.count
                    };
        default:
            return state;

    }
   }

const store = createStore(countReducer);

   store.subscribe( () => {
   
   console.log(store.getState());
   
   });

store.dispatch({
    type:'INCREMENT'
});
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(Set({count: 1000}));
store.dispatch(ReSet());