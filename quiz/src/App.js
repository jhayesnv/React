import React, { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading'
}

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'}
    case 'dataFailed':
      return {...state, status: 'error'}
    default:
      throw new Error('Action unknown');
  };
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:5000/questions')
    .then(res => res.json())
    .then(data => dispatch({type: 'dataReceived', payload: data}))
    .catch(() => dispatch({type: 'dataFailed'}));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  )
}

export default App;
