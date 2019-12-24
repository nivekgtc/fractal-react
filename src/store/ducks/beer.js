export const Types = {
  GET_BEER_LIST_REQUEST: '@beer/GET_LIST_REQUEST',
  GET_BEER_LIST_SUCCESS: '@beer/GET_LIST_SUCCESS',
  GET_BEER_DETAIL_REQUEST: '@beer/GET_DETAIL_SUCCESS',
  GET_BEER_DETAIL_SUCCESS: '@beer/GET_DETAILS_SUCCESS',
};

const INITIAL_STATE = {
  beerSelected: null,
  beers: null,
};

export default function beer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_BEER_LIST_SUCCESS:
      return { ...state, beers: action.payload.beers };
    case Types.GET_BEER_DETAIL_SUCCESS:
      return { ...state, beer: action.payload.beer };
    default:
      return state;
  }
}

export const Creators = {
  getBeerListRequest: () => ({
    type: Types.GET_BEER_LIST_REQUEST,
  }),
  getBeerListSuccess: beers => ({
    type: Types.GET_BEER_LIST_SUCCESS,
    payload: { beers },
  }),

  getBeerDetailsRequest: id => ({
    type: Types.GET_BEER_DETAIL_REQUEST,
    payload: { id },
  }),

  getBeerDetailsSuccess: beer => ({
    type: Types.GET_BEER_DETAIL_SUCCESS,
    payload: { beer },
  }),
};
