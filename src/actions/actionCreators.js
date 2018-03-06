import * as Types from './types.js';

export const addVNF = (vnfId) => ({
	type: Types.ADD_NEW_VNF,
	vnfId
});

export const deleteVNF = (vnf) => ({
	type: Types.DELETE_VNF,
	vnf
});
