import {IState} from './state';
import { MutationTree } from 'vuex';

function getResult (str : string) : number {
    const numbersAndOperations = str.trim().split(' ');
    let result = 0;
    let operation = '+';
    numbersAndOperations.forEach(str => {
      if(str !== '-' && str !== '+') {
        const num = parseInt(str);
        switch(operation) {
          case '+':
            result += num
            break;
          case '-':
            result -= num;
            break;  
        }
      }else {
        operation = str; 
      }
    });
    return result;
}

const checkIfFirstSymbolIsEqual = (state : IState , symbol : string) => {
    if(state.current.length > 1 && state.current[0] === "=") {
        if(symbol === "-" || symbol === "+") {
            state.current = state.current.replace('=','').trim();
        } else {
            state.prev = state.current;
            state.current = ''
        }
    }
}



const mutations : MutationTree<IState> =  {
    addToCurrent(state , symbol : string) {
        checkIfFirstSymbolIsEqual(state,symbol);
        switch (symbol) {
          case '-':
          case '+': {
            if(state.current.length == 0) {
                if(symbol == '+') {
                    break;
                }
                state.current= symbol;
            } else {
                state.current  += ` ${symbol} `;
            }  
            break;
          } 
          case 'c': {
            state.current = '';
            state.prev = '';
            break;
          }
          case '=': {
            state.prev= state.current.replace('=' , '');
            state.current = "= " + getResult(state.current).toString();
            break;
          }
          default : {
            state.current += symbol;
            break;
          }
        }
    },
    setLoadState(state,payload : boolean) {
        state.isLoading = payload;
    }
};

export default mutations;