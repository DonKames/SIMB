import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";


export const startSavingWarehouse = (warehouse) => {
    
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

		warehouse.creationDate = new Date().getTime();

    	try {
      		const docRef = await addDoc(
        	collection(db, uid, "warehouse", "warehouses"), warehouse);

      		console.log(docRef);

	  		warehouse.id = docRef.id;
	  
      		dispatch(saveWarehouse(warehouse));

    	} catch (error) {
        console.log(error);
      	}
  	};
};


export const saveWarehouse = ( warehouse ) => ({
    type: types.warehouseAddNew,
    payload: {...warehouse},
});



export const startLoadingWarehouses = () => {
	return async ( dispatch, getState ) => {

		const warehouses = [];

		console.log("estamos pidiendo los datos");
		const { uid } = getState().auth;
		try {
			console.log("estamos pidiendo los datos");
			const warehousesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses" ) );
			warehousesSnapshot.forEach((doc) => {
				console.log(doc.id);
				warehouses.push({
					id: doc.id,
					...doc.data(),
				});
			});

			console.log(warehouses);
			
			dispatch(loadWarehouses(warehouses));
		} catch (error) {
			console.log(error);
		}
	}
};


const loadWarehouses = ( warehouses ) => ({
	type: types.warehousesLoad,
	payload: warehouses,
});



export const startSavingEmployee = (employee) => {
	return async ( dispatch, getState ) => {
		
		const { uid } = getState().auth;

		employee.creationDate = new Date().getTime();

		try {

			const docRef = await addDoc(collection(db, uid, "warehouse", "employees"), employee);

			console.log(docRef);

			employee.id = docRef.id;

			dispatch(saveEmployee(employee));

		} catch (error) {
			console.log(error);
		}
	}
};


const saveEmployee = ( employee ) => ({
	type: types.employeeAddNew,
	payload: employee,
});


export const startLoadingEmployees = () => {
	return async ( dispatch, getState ) => {
		
		const employees = [];

		const { uid } = getState().auth;

		try {
			const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "employees" ) );
			employeesSnapshot.forEach((doc) => {
				console.log(doc.id);
				employees.push({
					id: doc.id,
					...doc.data(),
				});
			});

			console.log(employees);

			dispatch(loadEmployees(employees));
		} catch (error) {
			console.log(error);
		}
	};
};

const loadEmployees = ( employees ) => ({});