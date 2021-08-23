import initalState from "./initalState";
import { SET_ALBUMS, SET_PHOTOS, SET_TODOS, TOGGLE_MENU } from "./types";


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return { ...state, albums: action.payload }
        case SET_TODOS:
            return { ...state, todos: action.payload }
        case TOGGLE_MENU:
            return { ...state, isSidebarShow: !state.isSidebarShow }
        case SET_PHOTOS:
            return { ...state, photos: action.payload }
        default:
            return state;
    }
};

export default reducer