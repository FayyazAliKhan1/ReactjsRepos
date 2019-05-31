const initState = {
    projects: [
        {id: 1, title:'First', content:'Something'}, {id: 2, title:'Second', content:'Somewhere'}, {id: 3, title:'Third', content:'Some Project'}
    ]
};
const projectRed = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Create Project ', action.project);
    }
    return state;
} ; export default projectRed;