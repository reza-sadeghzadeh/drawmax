import * as actions from "../actions/getData";

const initialState: {} = {};

interface myInter {
  type: string;
  payload: Object;
}

export const getDataReducer: (state: object, {}: myInter) => void = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actions.GET_HOME_HERO_MOVIES:
      return { ...state, ...payload };

    case actions.GET_LATEST_MOVIES:
      return { ...state, ...payload };

    case actions.GET_LATEST_SERIES:
      return { ...state, ...payload };

    case actions.GET_RELATED_MOVIES:
      return { ...state, ...payload };

    default:
      return state;
  }
};
