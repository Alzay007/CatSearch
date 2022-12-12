import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loadingNode, loadingState } from "./loading.reducer";

const selectLoaderFeature = createFeatureSelector<loadingState>(loadingNode)

export const selectLoader = createSelector(
  selectLoaderFeature,
  (state: loadingState): boolean => state.isLoading
)
