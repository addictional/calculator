import mutations from './mutations';
import {IState} from './state';
const {addToCurrent} = mutations;

describe('mutations check',()=>{
    describe ('test addToCurrent',()=>{
        it('should calculate correctly',()=>{
            const state : IState = { prev : '' , current : '324 + 1 - 2',isLoading : false};
            addToCurrent(state,"-");
            addToCurrent(state,"3");
            addToCurrent(state,"=");
            expect(state.current).toEqual("= 320");
        });
        it('if first symbol equal to - should calculate correctly',()=>{
            const state : IState = { prev : '' , current : '',isLoading : false};
            addToCurrent(state,"-");
            addToCurrent(state,"3");
            addToCurrent(state,"+");
            addToCurrent(state,"10");
            addToCurrent(state,"=");
            expect(state.current).toEqual("= 7");
        });
        it('should ignore "+" if current string empty',()=>{
            const state : IState = { prev : '' , current : '',isLoading : false};
            addToCurrent(state,"+");
            expect(state.current).toEqual("");
        });
        
        it('should remove "=" if "+" or  "-" added',()=>{
            const state : IState = { prev : '' , current : '',isLoading : false};
            addToCurrent(state,"3");
            addToCurrent(state,"+");
            addToCurrent(state,"10");
            addToCurrent(state,"=");
            addToCurrent(state,"+");
            expect(state.current).toEqual("13 + ");
        });  
    })
})