const encsModels = {
	encs5104: {
		name: 'ENCS5104 (4 core)',
		cores: 4,
		nextModel: 'ENCS5406 (6 core)'
	},
	encs5406: {
		name: 'ENCS5406 (6 core)',
		cores: 6,
		nextModel: 'ENCS5408 (8 core)'
	},
	encs5408: {
		name: 'ENCS5408 (8 core)',
		cores: 8,
		nextModel: 'ENCS5412 (12 core)'
	},
	encs5412: {
		name: 'ENCS5412 (12 core)',
		cores: 12,
		nextModel: 'CSP-2100-X1'
	},
	csp2100: {
		name: 'CSP-2100-X1',
		cores: 44
	}
};

export default encsModels;
