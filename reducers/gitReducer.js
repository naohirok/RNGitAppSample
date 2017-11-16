var gitRepos = [];

const gitReducer = (state = [], action) => {
    switch (action.type) {
        case "Get_Repos": {
            gitRepos = action.payload;
            console.log(action, 'action');
            return gitRepos;
        }
        break;
    }
    return gitRepos;
}

export default gitReducer;
