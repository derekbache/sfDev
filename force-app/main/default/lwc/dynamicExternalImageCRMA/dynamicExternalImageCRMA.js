import { LightningElement, api } from 'lwc';

export default class DynamicExternalImageCRMA extends LightningElement {
  @api results;
  @api metadata;
  @api selection;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;
  @api refresh;

  @api stateChangedCallback(prevState, newState) {}
}