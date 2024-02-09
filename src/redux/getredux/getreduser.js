import {
    LOADING,
    SUCCESS,
    ERROR,
  } from './gettypes';
  
  const initialState = {
      loading: false,
      users: [],
      error: null
  };
  
  const reducer = (state = initialState, action ) => {
      switch (action.type) {
          case LOADING:
              return {
                  ...state,
                  loading: true,
              };
          case SUCCESS:
              return {
                  ...state,
                  loading: false,
                  users: action.payload,
              };
          case ERROR:
              return {
                  ...state,
                  loading: false,
                  error: action.payload,
              };
              default:
                  return state;
      }
  };
  
  export default reducer;