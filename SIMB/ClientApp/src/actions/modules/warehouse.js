import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";


export const startSavingWarehouse = ( warehouse ) => {
    return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		warehouse.creationDate = new Date().getTime();
		
    	try {

			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses" ), warehouse );
			warehouse.id = docRef.id;
			dispatch( saveWarehouse( warehouse ) );

		} catch (error) {
			console.log( error );
		}
	};
};


export const startSavingEmployee = ( employee ) => {
	return async ( dispatch, getState ) => {
			
		const { uid } = getState().auth;
		employee.creationDate = new Date().getTime();
	
		try {

			const docRef = await addDoc( collection( db, uid, "warehouse", "employees" ), employee );
			employee.id = docRef.id;
			dispatch( saveEmployee( employee ) );

		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingCategory = ( category ) => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		category.creationDate = new Date().getTime();

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "categories" ), category );
			category.id = docRef.id;
			dispatch( saveCategory( category ) );
			
		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingSubCategory = ( subCategory ) => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		subCategory.creationDate = new Date().getTime();

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "subCategories" ), subCategory );
			subCategory.id = docRef.id;
			dispatch( saveSubCategory( subCategory ) );
			
		} catch ( error ) {
			console.log( error );
		}
	}
};




export const saveWarehouse = ( warehouse ) => ({
	type: types.warehouseAddNew,
   	payload: { ...warehouse },
});


const saveEmployee = ( employee ) => ({
	type: types.employeeAddNew,
	payload: employee,
});


export const saveCategory = ( category ) => ({
	type: types.categoryAddNew,
	payload: { ...category },
});


export const saveSubCategory = ( subCategory ) => ({
	type: types.subCategoryAddNew,
	payload: { ...subCategory },
});




export const startLoadingWarehouses = () => {
	return async ( dispatch, getState ) => {

		const warehouses = [];

		const { uid } = getState().auth;
		try {
			const warehousesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses" ) );
			warehousesSnapshot.forEach((doc) => {
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


export const startLoadingEmployees = () => {
	return async ( dispatch, getState ) => {
		
		const employees = [];
		
		const { uid } = getState().auth;

		try {
			const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "employees" ) );
			employeesSnapshot.forEach((doc) => {
				//console.log(doc.id, "=>", doc.data());
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


export const startLoadingCategories = () => {
	return async ( dispatch, getState ) => {
		
		const categories = [];
		
		const { uid } = getState().auth;
		
		try {
			const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "categories" ) );
			employeesSnapshot.forEach((doc) => {
				//console.log(doc.id, "=>", doc.data());
				categories.push({
					id: doc.id,
					...doc.data(),
				});
			});
			
			console.log(categories);
			
			dispatch(loadCategories(categories));
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingSubCategories = () => {
	return async ( dispatch, getState ) => {
		
		const subCategories = [];
		
		const { uid } = getState().auth;
		
		try {
			const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "subCategories" ) );
			employeesSnapshot.forEach((doc) => {
				//console.log(doc.id, "=>", doc.data());
				subCategories.push({
					id: doc.id,
					...doc.data(),
				});
			});
			
			console.log(subCategories);
			
			dispatch(loadSubCategories(subCategories));
		} catch (error) {
			console.log(error);
		}
	};
};




const loadEmployees = ( employees ) => ({
	type: types.employeesLoad,
	payload: employees,
});


const loadWarehouses = ( warehouses ) => ({
    type: types.warehousesLoad,
    payload: warehouses,
});


const loadCategories = ( categories ) => ({
	type: types.categoriesLoad,
	payload: categories,
});


const loadSubCategories = ( subCategories ) => ({
	type: types.subCategoriesLoad,
	payload: subCategories,
});