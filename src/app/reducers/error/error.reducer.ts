import { ErrorActions, errorActionsType } from "./error.actions";

export const errorNode = 'isError';

export interface errorState {
  isError: boolean,
}

const initialState: errorState = {
  isError: false,
}

export const ErrorReducer = (state = initialState, action: ErrorActions) => {
  switch (action.type) {
    case errorActionsType.correct:
      return {
        isError: false,
      };

    case errorActionsType.incorrect:
      return {
        isError: true,
      };

    default:
      return state
  }
}
