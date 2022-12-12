import { Action } from "@ngrx/store";

export enum loadActionsType {
  active = '[iSERROR] active',
  finish = '[ISERROR] finish',
}

export class loadActiveAction implements Action {
  readonly type = loadActionsType.active;
}

export class loadFinishAction implements Action {
  readonly type = loadActionsType.finish;
}

export type LoadActions = loadActiveAction | loadFinishAction;
