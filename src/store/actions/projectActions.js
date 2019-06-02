const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      dispatch({ type: 'CREATE_PROJECT', project });
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
  
        authorFirstName: 'Ali',
  
        authorLastName: 'Khan',
  
        authorId: 12345,
  
        createdAt: new Date()
  
      }).then(() => {
  
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  
      }).catch(err => {
  
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
  
      });
  
    }
  
  };export default createProject;