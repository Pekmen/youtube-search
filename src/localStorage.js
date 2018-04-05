/* Fetch data from localstore and convert it to JSON object
*/
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('storedState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/* Convert data to string and store it inside localstorage
*/
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('storedState', serializedState);
  } catch (err) {
    console.warn(err);
  }
};
