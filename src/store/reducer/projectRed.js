const initState = {
    projects: [
        {id: 1, title:'First', content:'Something'}, {id: 2, title:'Second', content:'Somewhere'}, {id: 3, title:'Third', content:'Some Project'}
    ]
};
const projectRed = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Create Project ');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project Error');
            return state;
        default:
            return state;
    }
} ; export default projectRed;