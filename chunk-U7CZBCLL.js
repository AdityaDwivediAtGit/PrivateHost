import {
  createFeatureSelector,
  createSelector
} from "./chunk-RKW33Q7V.js";

// src/app/store/temple/temple.selectors.ts
var selectTempleState = createFeatureSelector("temple");
var selectAllTemples = createSelector(selectTempleState, (state) => state.temples);
var selectTempleLoading = createSelector(selectTempleState, (state) => state.loading);

export {
  selectAllTemples,
  selectTempleLoading
};
//# sourceMappingURL=chunk-U7CZBCLL.js.map
