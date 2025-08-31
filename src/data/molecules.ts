import type { MoleculeData } from '../types';

export const knownMolecules: MoleculeData = {
    // Water (H2O)
    "HHO": { name: "Water", pairs: [{ pair: [0, 2], type: 1 }, { pair: [1, 2], type: 1 }] },
    "HOH": { name: "Water", pairs: [{ pair: [0, 1], type: 1 }, { pair: [1, 2], type: 1 }] },
    "OHH": { name: "Water", pairs: [{ pair: [0, 1], type: 1 }, { pair: [0, 2], type: 1 }] },
    // Methane (CH4)
    "CHHHH": { name: "Methane", pairs: [{ pair: [0, 1], type: 1 }, { pair: [0, 2], type: 1 }, { pair: [0, 3], type: 1 }, { pair: [0, 4], type: 1 }] },
    // Ammonia (NH3)
    "NHHH": { name: "Ammonia", pairs: [{ pair: [0, 1], type: 1 }, { pair: [0, 2], type: 1 }, { pair: [0, 3], type: 1 }] },
    // Carbon Dioxide (CO2)
    "COO": { name: "Carbon Dioxide", pairs: [{ pair: [0, 1], type: 2 }, { pair: [0, 2], type: 2 }] },
    "OCO": { name: "Carbon Dioxide", pairs: [{ pair: [0, 1], type: 2 }, { pair: [1, 2], type: 2 }] },
};