import {IState} from './state';
import { MutationTree } from 'vuex';

type MathSymbol = '+' | '-';

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

function checkIfFirstSymbolIsEqualSign (state : IState , symbol : string)  {
  if(state.current.length > 1 && state.current[0] === "=") {
    state.prev += ' ' +state.current;
    if(symbol === "-" || symbol === "+") {
        state.current = state.current.replace('=','').trim();
    } else {
        state.current = ''
    }
  }
}


function clearBuffer(state : IState) {
  state.prev = '';
  state.current = '';
}

function addMathSymbol(state : IState,symbol : MathSymbol ) {
  if(state.current.length == 0 && symbol != '+') {
    state.current= symbol;
  } else if(state.current.length > 1 && state.current[state.current.length-1] == ' ') {
    return;
  } else if(state.current.length > 0) {
    state.current  += ` ${symbol} `;
  }  
}



const mutations : MutationTree<IState> =  {
    addToCurrent(state , symbol : string) {
        checkIfFirstSymbolIsEqualSign(state,symbol);
        switch (symbol) {
          case '-':
          case '+': {
            addMathSymbol(state,symbol)
            break;
          } 
          case 'c': {
            clearBuffer(state);
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