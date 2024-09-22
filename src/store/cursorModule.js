export default {
    state:()=>({
        cursor:null,
        position:{
            x:0,
            y:0
        }
    }),
    getters : {
        getPosition(state){
            return state.position
        },
        getCursor(state){
            return state.cursor
        },
    },
    mutations : {
        setPosition(state, position) {
            state.position = position
        },
        setCursor(state,value){
            state.cursor=value
        },
    },
    actions : {
        cursorEnter({state}) {
            state.cursor.classList.add('cursor-pointer');
        },
        cursorLeave({state}) {
            state.cursor.classList.remove('cursor-pointer');
        },
    },
    namespaced:true
}