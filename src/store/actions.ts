import { ActionTree } from 'vuex';
import {IState} from './state'

type PAYLOAD = '=';

const actions : ActionTree<IState,IState> = {
    asyncCalculation : ({state,commit},payload  : PAYLOAD) => {
        if(state.current.length == 0 || (state.current.length > 0 && state.current[0] == payload)) {
            return;
        }
        commit('setLoadState',true);
        setTimeout(()=>{
            commit('addToCurrent',payload);
            commit('setLoadState',false);
        },1000);
    }
}

export default actions;