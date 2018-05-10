import * as Types from './types.js';

export const addVNF = (vnfId) => ({
	type: Types.ADD_NEW_VNF,
	vnfId
});

export const deleteVNF = (vnf) => ({
	type: Types.DELETE_VNF,
	vnf
});

export const togglePOE = (poe) => ({
	type: Types.TOGGLE_POE,
	poe
});

export const selectNIM = (nim) => ({
	type: Types.SELECT_NIM,
	nim
});

export const addCustomVNF = (vnf) => ({
	type: Types.ADD_CUSTOM_VNF,
	vnf
});
