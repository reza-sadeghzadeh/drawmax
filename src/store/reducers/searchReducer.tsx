import { SHOW_SEARCH } from "../actions/search";

const initialState = {
  showSearch: false,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: Object }
) => {
  switch (type) {
    case SHOW_SEARCH:
      return { ...state, ...payload };

    default:
      return state;
  }
};
