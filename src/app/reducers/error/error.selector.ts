import { createFeatureSelector, createSelector } from "@ngrx/store";
import { errorNode, errorState } from "./error.reducer";

const selectErrorFeature = createFeatureSelector<errorState>(errorNode)

export const selectError = createSelector(
  selectErrorFeature,
  (state: errorState): boolean => state.isError
)
