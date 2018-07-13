import { createStore } from 'redux';
import VNFS from '../data/vnfs';
import encsModels from '../data/encsModels';
import find from 'lodash.find';
import uuid from 'uuid/v4';



const initialState = {
	cards: {
		routers: [],
		vwaas: [],
		firewalls: [],
		thirdparty: []
	},
	requirements: {
		cpu: 1,
		ram: 2,
		disk: 10,
		poe: false,
		nim: null,
		ssd: false
	},
	currentRecommendation: {
		box: encsModels.encs5104,
		recMemory: '8 GB',
		recDisk: '100 GB'
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

	case 'ADD_NEW_VNF':
		let newState = Object.assign({}, state);
		let selectedVNF = findVNF(action.vnfId);
		let vnfType = selectedVNF.type;

		const newCard = constructCard(selectedVNF);
		// Push the card to this
		newState.cards[vnfType].push(newCard);
		let allCards = newState.cards;
		newState.requirements = calculateRequirements(allCards, selectedVNF, state.requirements);
		newState.currentRecommendation = calculateRecommendation(newState.requirements, state.currentRecommendation);
		return newState;


	case 'ADD_CUSTOM_VNF':
		newState = Object.assign({}, state);
		vnfType = action.vnf.type;
		const custCard = constructCard(action.vnf);

		newState.cards[vnfType].push(custCard);
		allCards = newState.cards;
		newState.requirements = calculateRequirements(allCards, action.vnf, state.requirements);
		newState.currentRecommendation = calculateRecommendation(newState.requirements, state.currentRecommendation);

		return newState;


	case 'DELETE_VNF':
		newState = Object.assign({}, state);
		// We will just reference the card instead of the id, should be fine as long as the state is not mutated
		console.log(action);
		// selectedVNF = state.cards[action.lane][action.];
		selectedVNF = action.vnf;
		const lane = selectedVNF.laneId;
		const desiredCards = newState.cards[lane];
	//	console.log(removeVNF(desiredCards, selectedVNF.uuid);
		newState.cards[lane] = removeVNF(desiredCards, selectedVNF.uuid);
		console.log(newState);
		allCards = newState.cards;
		newState.requirements = calculateRequirements(allCards, selectedVNF, state.requirements, true);
		newState.currentRecommendation = calculateRecommendation(newState.requirements, state.currentRecommendation);
		return newState;


	case 'TOGGLE_POE':
		newState = Object.assign({}, state);
		newState.requirements.poe = action.poe;
		newState.currentRecommendation = calculateRecommendation(newState.requirements, state.currentRecommendation);
		return newState;


	case 'SELECT_NIM':
		newState = Object.assign({}, state);
		newState.requirements.nim = action.nim;
		newState.currentRecommendation = calculateRecommendation(newState.requirements, state.currentRecommendation);
		return newState;


	default:
		return state;
	}
};

// @TODO: Add Test for this
const calculateRequirements = (allCards, selectedVNF, existingRequirements, subtract = false) => {
	if (!selectedVNF) {
		console.log('This VNF was not found');
		return existingRequirements;
	}

	// Copy to prevent editing reference object
	const newRequirements = Object.assign({}, existingRequirements);

	if (subtract) {
		newRequirements.cpu -= selectedVNF.specs.vcpu;
		newRequirements.ram -= selectedVNF.specs.memory;
		newRequirements.disk -= selectedVNF.specs.disk;
		newRequirements.ssd = needSSD(allCards);
	} else {
		newRequirements.cpu += selectedVNF.specs.vcpu;
		newRequirements.ram += selectedVNF.specs.memory;
		newRequirements.disk += selectedVNF.specs.disk;
		if(selectedVNF.specs.ssd) {
			newRequirements.ssd = true;
		}
	}

	return newRequirements;
};


const calculateRecommendation = (requirements, existingRecommendation) => {
	if(!requirements) {
		console.log('Invalid requirements');
		return existingRecommendation;
	}

	// Copy to prevent editing reference object
	const newRecommendation = Object.assign({}, existingRecommendation);

	newRecommendation.box = selectCpu(requirements.cpu, requirements.poe, requirements.nim);
	newRecommendation.recMemory = selectRam(requirements.ram);
	newRecommendation.recDisk = selectDisk(requirements.disk);

	return newRecommendation;
};


// @TODO: Add Test
const constructCard = (selectedVNF) => ({
	// Put everything else in here, and override
	...selectedVNF,
	id: selectedVNF.id || '',
	uuid: uuid(),
	title: selectedVNF.name,
	description: selectedVNF.description || ''
});


const selectCpu = (cpu, poe, nim) => {
		if(cpu <= 4 && !poe && !nim) return encsModels.encs5104;
		if(cpu <= 6 && !poe) return encsModels.encs5406;
		if(cpu <= 8) return encsModels.encs5408;
		if(cpu <= 12) return encsModels.encs5412;
		return encsModels.csp2100;
}


const selectRam = (ram) => {
    if(ram > 64) return 'N/A';
    if(ram >= 32) return '64 GB';
    if(ram >= 16) return '32 GB';
    if(ram >= 8) return '16 GB';
    return '8 GB';
}


const selectDisk = (disk) => {
    if(disk > 2000) return 'N/A';
    if(disk >= 1000) return '2 TB';
    if(disk >= 250) return '1 TB';
    if(disk >= 100) return '250 GB';
    return '100 GB';
}

const needSSD = (selectedVNFs) => {

	// for(let i = 0; i < selectedVNFs.length; i++){
	//    let lane = myArray[i].child;
	//    for(let j = 0; j < lane.length; j++){
	//   		if(lane[j].specs.ssd) return true;
	//    }
	// }

	// let ssd = false;
	//
	// Object.keys(selectedVNFs).forEach(function (lane) {
	// 	lane.forEach(function (vnf) {
	// 		if(vnf.specs.ssd) ssd = true;
	// 	});
	// });

	for (var lane in selectedVNFs) {
    if (selectedVNFs.hasOwnProperty(lane)) {
        // console.log(key + " -> " + selectedVNFs[key].length);
				for(let i = 0; i < selectedVNFs[lane].length; i++) {
					console.log(selectedVNFs[lane][i]);
					if(selectedVNFs[lane][i].specs.ssd) return true;
				}
    }
	}

	return false;
}

// @TODO: Add Test
const findVNF = (id) => find(VNFS, (vnf) => vnf.id === id);


// selectedVNFS:Array, id:String -> desiredVNFs:Array
const removeVNF = (selectedVNFs, uuid) => {
	if (!Array.isArray(selectedVNFs)) {
		return selectedVNFs;
	}

	return selectedVNFs.filter(vnf => vnf.uuid !== uuid);
};

const appStore = createStore(reducer);

export default appStore;
