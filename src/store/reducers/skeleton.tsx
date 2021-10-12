import * as actions from "../actions/showSckeleton";

const initialState = {
  showSkeletonForLatestMovies: false,
  showSkeletonForLatestSeries: false,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: Object }
) => {
  switch (type) {
    case actions.SHOW_SKELETON_FOR_LATEST_MOVIES:
      return { ...state, ...payload };

    case actions.SHOW_SKELETON_FOR_LATEST_SERIES:
      return { ...state, ...payload };

    case actions.SHOW_SKELETON_FOR_SEARCH:
      return { ...state, ...payload };

    default:
      return state;
  }
};
