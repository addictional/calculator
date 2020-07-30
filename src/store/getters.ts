import { GetterTree } from 'vuex';
import {IState} from './state';


const getters: GetterTree<IState, IState> = {
    result ({prev,isLoading}): string {
        return isLoading ? '' : prev;
    },
    current ({current,isLoading}): string {
        return isLoading ? '' : current;
    }
}

export default getters;