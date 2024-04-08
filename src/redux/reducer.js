import { ADD_CONTACT, FILTER_CONTACT, REMOVE_CONTACT } from './constants';

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const phoneBookReduser = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            item => item.id !== action.payload
          ),
        },
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(item =>
            item.title.includes(action.payload)
          ),
        },
      };

    default:
      return state;
  }
};
