import { Action } from "@ngrx/store";

export enum errorActionsType {
  correct = '[ISLOADING] correct',
  incorrect = '[ISLOADING] incorrect',
}

export class errorCorrectAction implements Action {
  readonly type = errorActionsType.correct;
}

export class errorIncorrectAction implements Action {
  readonly type = errorActionsType.incorrect;
}

export type ErrorActions = errorIncorrectAction | errorCorrectAction;
