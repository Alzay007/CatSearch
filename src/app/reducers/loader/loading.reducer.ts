import { LoadActions, loadActionsType } from "./loading.actions";

export const loadingNode = 'isLoadingData';

export interface loadingState {
  isLoading: boolean,
}

const initialState: loadingState = {
  isLoading: false,
}

export const loadingReducer = (state = initialState, action: LoadActions) => {
  switch (action.type) {
    case loadActionsType.active:
      return {
        isLoading: true,
      };

    case loadActionsType.finish:
      return {
        isLoading: false,
      };

    default:
      return state
  }
}
