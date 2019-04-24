import {
  SHOW_INFOBOX,
  CLOSE_INFOBOX,
  ADD_PLACE
} from "../actions/places.types";

export const initialPlacesState = {
  data: [
    {
      address: "Distillery District, Toronto, ON M5A, Canada",
      lat: 43.65030549999999,
      lng: -79.35958,
      name: "Distillery District",
      place_id: "ChIJCcYBxz3L1IkRFmpW29wp58M",
      vicinity: "Old Toronto",
      type: "neighbourhood"
    },
    {
      address: "Graffiti Alley, Toronto, ON M5V, Canada",
      lat: 43.64770849999999,
      lng: -79.39951880000001,
      name: "Graffiti Alley",
      place_id:
        "EidHcmFmZml0aSBBbGxleSwgVG9yb250bywgT04gTTVWLCBDYW5hZGEiLiosChQKEgm9eRhd3DQriBGJA-KXpt7jsRIUChIJpTvG15DL1IkRd8S0KlBVNTI",
      vicinity: "Old Toronto",
      type: "route"
    },
    {
      address: "301 Front St W, Toronto, ON M5V 2T6, Canada",
      lat: 43.6425662,
      lng: -79.38705679999998,
      name: "CN Tower",
      place_id: "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
      vicinity: "301 Front Street West, Toronto",
      type: "museum"
    },
    {
      address: "461 Danforth Ave, Toronto, ON M4K 1P1, Canada",
      lat: 43.6777648,
      lng: -79.35022620000001,
      name: "Sushi Bistro Japanese Restaurant",
      place_id: "ChIJsR6j7-LN1IkROPhp9pEBq60",
      vicinity: "461 Danforth Avenue, Toronto",
      type: "restaurant"
    }
  ],
  placeInfo: null
};

export default function places(state = initialPlacesState, action) {
  if (!action) return state;
  switch (action.type) {
    case SHOW_INFOBOX:
      return {
        ...state,
        placeInfo: action.place
      };
    case CLOSE_INFOBOX:
      return {
        ...state,
        placeInfo: null
      };
    case ADD_PLACE:
      return {
        ...state,
        data: state.data.concat(action.place)
      };
    default:
      return state;
  }
}
