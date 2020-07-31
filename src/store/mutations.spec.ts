import mutations from './mutations';
import {IState} from './state';
const {addToCurrent} = mutations;

describe('mutations check',()=>{
    describe ('addToCurrent',()=>{
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

        it('should clear current buffer if there is "=" and symbol equal to number',()=>{
            const state : IState = { prev : '30 + 20' , current : '= 50',isLoading : false};
            addToCurrent(state,"3");
            expect(state).toEqual({ prev : '30 + 20 = 50' , current : '3',isLoading : false});
        });
        
        it('should clear buffer on "c" added',()=>{
            const state : IState = { prev : '2 + 3 = 1' , current : '324 + 1 - 2',isLoading : false};
            addToCurrent(state,"c");
            expect(state).toEqual({ prev : '' , current : '',isLoading : false});
        });
        it('can\'t add 2 or more math symbols in a row',()=>{
            const state : IState = { prev : '' , current : '1 + ',isLoading : false};
            addToCurrent(state,"+");
            expect(state).toEqual({ prev : '' , current : '1 + ',isLoading : false});
        });   
    })
})