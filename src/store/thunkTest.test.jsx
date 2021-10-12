import store from "./index";

describe("redux-thunk testing", () => {
  it("Should work!", () => {
    let preStore = store.getState();
    store.dispatch(() => {});
    expect(preStore === store.getState()).toBeTruthy();
  });
});
