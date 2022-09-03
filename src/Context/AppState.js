import { useState } from 'react';
import AppContext from './AppContext';

function AppState(props){
    const [loggedInUser,setLoggedInUser] = useState(null);
    return(
        <AppContext.Provider value={{loggedInUser}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;