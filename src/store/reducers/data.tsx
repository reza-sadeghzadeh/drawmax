import { GET_DATA } from "../actions/getData";

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
    case GET_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
