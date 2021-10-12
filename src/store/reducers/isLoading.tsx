import * as actions from "../actions/isLoading";

const initialState = {
  isLoading: false,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: Object }
) => {
  switch (type) {
    case actions.IS_LOADING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
