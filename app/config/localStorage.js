export const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : undefined

export function saveState(state)
{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch(err){
        console.log(err);
    }
}