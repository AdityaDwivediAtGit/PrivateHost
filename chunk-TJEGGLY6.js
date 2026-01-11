import {
  createFeatureSelector,
  createSelector
} from "./chunk-WBHH357P.js";

// src/app/store/temple/temple.selectors.ts
var selectTempleState = createFeatureSelector("temple");
var selectAllTemples = createSelector(selectTempleState, (state) => state.temples);
var selectTempleLoading = createSelector(selectTempleState, (state) => state.loading);

export {
  selectAllTemples,
  selectTempleLoading
};
//# sourceMappingURL=chunk-TJEGGLY6.js.map
