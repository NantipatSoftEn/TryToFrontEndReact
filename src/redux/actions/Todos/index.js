let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({type: 'SET_VISIBILITY_FILTER', filter})

export const toggleTodo = id => ({type: 'TOGGLE_TODO', id})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const  fucking ={
    dog: 'putang ina'
}


const initialState = []
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id
                ? {
                    ...todo,
                    completed: !todo.completed
                }
                : todo)
        default:
            return state;
    }
}