const activeReducer = (state = null, action) => {
    switch(action.type) {
        case "Repo_Selected": return action.payload;
        break;
    }
    return state;
}

export default activeReducer;
