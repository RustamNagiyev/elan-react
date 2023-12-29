// categoryReducer.js

const initialState = {
  selectedCategory: null,
  selectedAccounntState: "Seçilənlər",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
    case "selected_account_state":
      return { ...state, selectedAccounntState: action.payload };
  }
};

export default categoryReducer;
