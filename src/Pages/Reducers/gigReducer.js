export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
  title: "",
  cat: "",
  cover: "",
  image: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  RevisionNumber: 0,
  features: [],
  price: 0,
};

export const gigReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      };

    case "ADD_FEATURE":
      const newFeature = action.payload;
      if (!state.features.includes(newFeature)) {
        return {
          ...state,
          features: [...state.features, newFeature],
        };
      }

      return state;
    case "REMOVE_FEATURE":
      return {
        ...state,
        features: state.features.filter(
          (feature) => feature !== action.payload
        ),
      };
    default:
      return state;
  }
};