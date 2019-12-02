/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationTime = payload => ({payload, type: CHANGE_DURATION});
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {

    case CHANGE_PHRASE:
      console.log('actiuion',action);
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: parseInt(action.payload.value),
        },
      };
    case ADD_TAG:
      console.log('actiuion',action);
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload.tag,
        ],
      };
    case REMOVE_TAG:
      console.log('removiung',action);
      return {
        ...statePart,
        tags: [
          ...statePart.tags.filter(tag => tag != action.payload.tag)],
      };
    default:
      return statePart;
  }
}
