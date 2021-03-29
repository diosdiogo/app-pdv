import { action } from 'typesafe-actions';
import { AccessTypes, Access } from './types';
import INITIAL_STATE from './index';

export const updateRequest = () => action(AccessTypes.UPDATE_REQUEST);

export const updateLead = (data: Access) => action(AccessTypes.UPDATE_SUCCESS, { data });

export const updateLeadField = (field: string, value: string | number | boolean) => action(AccessTypes.UPDATE_FIELD, { field, value });

export const failureLead = () => action(AccessTypes.UPDATE_FAILURE);

export const resetLead = () => action(AccessTypes.RESET_STATE, { INITIAL_STATE });