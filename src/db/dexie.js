import Dexie from 'dexie';

// Create your database
export const db = new Dexie('ClinicVisitDB');

// Define schema
db.version(1).stores({

});

// example for stores obj 
// {
//     food: '++id, name, quantity, price'
// }
// {
//     title: '',
//     start: '',
//     duration: '',
//     doctor: '',
// }


// Example functions
export const addVisit = async (checkInTime) => {
    // ADD CODE HERE
};

export const checkOutVisit = async (id, checkOutTime, notes) => {
    // ADD CODE HERE
};

export const getAllVisits = async () => {
    // ADD CODE HERE
};