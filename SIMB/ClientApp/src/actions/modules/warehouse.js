import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";



export const startSavingWarehouse = ( warehouse ) => {
	return async ( dispatch, getState ) => {
		
		const { uid } = getState().auth;
		warehouse.creationDate = new Date().getTime();
		warehouse.status = "enabled";

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
		employee.status = "enabled";
	
		try {

			await addDoc( collection( db, uid, "warehouse", "employees" ), employee );
			dispatch( saveEmployee( employee ) );

		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingCategory = ( category ) => {
	return async ( dispatch, getState ) => {
		
		const warehouseId = getState().warehouse.warehouse.activeWarehouse;

		console.log(warehouseId);

		const { uid } = getState().auth;
		category.creationDate = new Date().getTime();
		category.status = "enabled";

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses", warehouseId, "categories" ), category );
			//console.log(category);
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
		const warehouseId = getState().warehouse.warehouse.activeWarehouse;
		subCategory.creationDate = new Date().getTime();
		subCategory.status = "enabled";

		// const category = subCategory.category;
		// delete subCategory.category;
		// console.log(category);

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses", warehouseId, "subCategories" ), subCategory );
			subCategory.id = docRef.id;
			dispatch( saveSubCategory( subCategory ) );
			
		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingProduct = ( product ) => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		const warehouseId = getState().warehouse.warehouse.activeWarehouse;
		product.creationDate = new Date().getTime();
		product.status = "enabled";

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses", warehouseId, "product" ), product );
			product.id = docRef.id;
			dispatch( saveProduct( product ) );
			
		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingProducts = ( products ) => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		const warehouseId = getState().warehouse.warehouse.activeWarehouse;
		products.creationDate = new Date().getTime();
		products.status = "enabled";

		try {
			
			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses", warehouseId, "products" ), products );
			products.id = docRef.id;
			dispatch( saveProducts( products ) );
			
		} catch ( error ) {
			console.log( error );
		}
	}
};


export const startSavingSku = ( sku ) => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		const warehouseId = getState().warehouse.warehouse.activeWarehouse;

		try {

			const docRef = await addDoc( collection( db, uid, "warehouse", "warehouses", warehouseId, "sku" ), sku );
			sku.id = docRef.id;
			dispatch( saveSku( sku ) );

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


const saveCategory = ( category ) => ({
	type: types.categoryAddNew,
	payload: { ...category },
});


const saveSubCategory = ( subCategory ) => ({
	type: types.subCategoryAddNew,
	payload: { ...subCategory },
});


const saveProduct = ( product ) => ({
	type: types.productAddNew,
	payload: { ...product },
});


const saveProducts = ( products ) => ({
	type: types.productsAddNew,
	payload: { ...products },
});


const saveSku = ( sku ) => ({
	type: types.productSkuAddNew,
	payload: { ...sku },
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

			//console.log(employees);

			dispatch(loadEmployees(employees));
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingCategories = (warehouseId) => {
	return async ( dispatch, getState ) => {
		
		const categories = [];
		const { uid } = getState().auth;
		console.log(warehouseId);
		//const warehouseId = getState().warehouse.warehouse;
		
		//console.log(uid);
		
		try {

			if	(warehouseId != null && warehouseId !== "") {
				const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses", warehouseId, "categories" ) );
				
				employeesSnapshot.forEach((doc) => {
					//console.log(doc.id, "=>", doc.data());
					categories.push({
						id: doc.id,
						...doc.data(),
					});
				});
				
				//console.log(categories);
				
				dispatch(loadCategories(categories));
			}
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingSubCategories = (warehouseId) => {
	return async ( dispatch, getState ) => {
		
		const subCategories = [];
		
		const { uid } = getState().auth;
		try {
			if	(warehouseId != null && warehouseId !== "") {
				const employeesSnapshot = await getDocs(
				collection(db, uid, "warehouse", "warehouses", warehouseId, "subCategories"));
        employeesSnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          subCategories.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        console.log(subCategories);

        dispatch(loadSubCategories(subCategories));
      }
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingProduct = (warehouseId) => {
	return async ( dispatch, getState ) => {
		
		const product = [];
		
		const { uid } = getState().auth;
		
		try {
			if	(warehouseId !== null && warehouseId !== "") {
			const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses", warehouseId, "product" ) );
			employeesSnapshot.forEach((doc) => {
				//console.log(doc.id, "=>", doc.data());
				product.push({
					id: doc.id,
					...doc.data(),
				});
			});
			
			console.log( product );
			
			dispatch(loadProduct( product ));
		}
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingProducts = (warehouseId) => {
	return async ( dispatch, getState ) => {
		
		const products = [];
		
		const { uid } = getState().auth;
		
		try {
			if	(warehouseId != null && warehouseId !== "") {
				const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses", warehouseId, "products" ) );
				employeesSnapshot.forEach((doc) => {
				//console.log(doc.id, "=>", doc.data());
					products.push({
						id: doc.id,
						...doc.data(),
					});
				});
			
				console.log( products );
			
				dispatch( loadProducts( products ) );
			}
		} catch (error) {
			console.log(error);
		}
	};
};


export const startLoadingSku = (warehouseId) => {
	return async ( dispatch, getState ) => {

		const sku = [];

		const { uid } = getState().auth;

		try {
			if	(warehouseId != null && warehouseId !== "") {
				const employeesSnapshot = await getDocs( collection( db, uid, "warehouse", "warehouses", warehouseId, "sku" ) );
				employeesSnapshot.forEach((doc) => {
					//console.log(doc.id, "=>", doc.data());
					sku.push({
						id: doc.id,
						...doc.data(),
					});
				});

				console.log( sku );

				dispatch( loadSku( sku ) );
			}
		} catch (error) {
			console.log(error);
		}
	};
}





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


const loadProduct = ( product ) => ({
	type: types.productLoad,
	payload: product,
});


const loadProducts = ( products ) => ({
	type: types.productsLoad,
	payload: products,
});


const loadSku = ( sku ) => ({
	type: types.productSkuLoad,
	payload: sku,
});




export const startDeletingWarehouse = ( warehouseId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		console.log(warehouseId);
		try {
			await deleteDoc( doc( db, uid, "warehouse", "warehouses", warehouseId ) );
			dispatch(deleteWarehouse(warehouseId));
		} catch (error) {
			console.log(error);
		}
	};
}


export const startDeletingEmployee = ( employeeId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		console.log(employeeId);
		try {
			await deleteDoc( doc( db, uid, "warehouse", "employees", employeeId ) );
			dispatch(deleteEmployee(employeeId));
		} catch (error) {
			console.log(error);
		}
	};
}


export const startDeletingCategory = ( categoryId, warehouseId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		console.log(categoryId, " - ", warehouseId);
		try {
			await deleteDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "categories", categoryId ) );
			//console.log(test);
			dispatch(deleteCategory(categoryId));
		} catch (error) {
			console.log(error);
		}
	};
}


export const startDeletingSubCategory = ( subCategoryId, warehouseId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		console.log(subCategoryId, " - ", warehouseId);
		try {
			await deleteDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "subCategories", subCategoryId ) );
			//console.log(test);
			dispatch(deleteSubCategory(subCategoryId));
		} catch (error) {
			console.log(error);
		}
	};
}




const deleteWarehouse = ( warehouseId ) => ({
	type: types.warehouseDelete,
	payload: warehouseId,
});


const deleteEmployee = ( employeeId ) => ({
	type: types.employeeDelete,
	payload: employeeId,
});


const deleteCategory = ( categoryId ) => ({
	type: types.categoryDelete,
	payload: categoryId,
});


const deleteSubCategory = ( subCategoryId ) => ({
	type: types.subCategoryDelete,
	payload: subCategoryId,
});





export const startChangingMainWarehouse = ( mainWarehouse ) => {
	return async ( dispatch, getState ) => {
		
		//console.log(mainWarehouse);
		const { uid } = getState().auth;
		
		try {
			await updateDoc( doc( db, uid, "warehouse" ), { mainWarehouse: mainWarehouse } );
			dispatch(changeMainWarehouse(mainWarehouse));
		} catch (error) {
			console.log(error);
		}
	}
};



export const changeMainWarehouse = ( mainWarehouse ) => ({
	type: types.warehouseSetMain,
	payload: mainWarehouse,
});



export const startEditWarehouse = ( warehouse, formValues ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		const {id, name, location, status, warehouseKeeper } = formValues;

		warehouse.name = name;
		warehouse.location = location;
		warehouse.status = status;
		warehouse.warehouseKeeper = warehouseKeeper;

		try {

			await updateDoc( doc( db, uid, "warehouse", "warehouses", id ), warehouse );
			dispatch(editWarehouse( id, warehouse ));

		} catch (error) {
			console.log(error);
		}
	}
};


export const startEditEmployee = ( employee, formValues ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		const {id, name, email, phone, rut, status } = formValues;

		employee.id = id;
		employee.name = name;
		employee.email = email;
		employee.phone = phone;
		employee.rut = rut;
		employee.status = status;

		try {
			await updateDoc( doc( db, uid, "warehouse", "employees", id ), employee );
				
			dispatch(editEmployee( id, employee ));
		} catch (error) {
			console.log(error);
		}
	}
};


export const startEditCategory = ( category, formValues, warehouseId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;
		
		const {id, name, status } = formValues;

		category.id = id;
		category.name = name;
		category.status = status;

		try {

			await updateDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "categories", id ), category );
			dispatch(editCategory( id, category ));

		} catch (error) {
			console.log(error);
		}
	}
};


export const startEditSubCategory = ( subCategory, formValues, warehouseId ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		const {id, name, status } = formValues;

		subCategory.id = id;
		subCategory.name = name;
		subCategory.status = status;

		try {

			await updateDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "subCategories", id ), subCategory );
			dispatch(editSubCategory( id, subCategory ));

		} catch (error) {
			console.log(error);
		}
	}
};




const editWarehouse = ( id, warehouse ) => ({
	type: types.warehouseEdit,
	payload: {
		id,
		warehouse,
	},
});


const editEmployee = ( id, employee ) => ({
	type: types.employeeEdit,
	payload: {
		id,
		employee,
	},
});


const editCategory = ( categoryId, category ) => ({
	type: types.categoryEdit,
	payload: { categoryId, category },
});


const editSubCategory = ( subCategoryId, subCategory ) => ({
	type: types.subCategoryEdit,
	payload: { subCategoryId, subCategory },
});




//!De aquí para abajo es de test.

export const startLoadingWarehouse = () => {
	return async ( dispatch, getState ) => {

		const { uid } = getState().auth;
		
		//console.log(uid);
		try {
			const warehouseSnapshot = await getDoc( doc( db, uid, "warehouse" ) );
			
			const warehouse = warehouseSnapshot.data();
			//console.log(warehouseSnapshot.data());
			
			dispatch(loadWarehouse(warehouse));
			//dispatch(setActiveWarehouse(warehouseId));

		} catch (error) {
			console.log(error);
		}
	}
};


const loadWarehouse = ( warehouse ) => ({
    type: types.warehouseLoad,
    payload: warehouse,
});


export const setActiveWarehouse = ( warehouse ) => ({
	type: types.warehouseSetActive,
	payload: warehouse,
});




export const startUpdatingProductStock = (quantity, id) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		const warehouseId = getState().warehouse.warehouse.activeWarehouse;
		console.log(quantity, id);

		try {
			const warehouseSnapshot = await getDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "sku", id ) );
			const warehouse = warehouseSnapshot.data();
			console.log(warehouse);
			const stock = warehouse.stock;
			const newStock = parseInt(stock) + parseInt(quantity);
			await updateDoc( doc( db, uid, "warehouse", "warehouses", warehouseId, "sku", id ), { stock: newStock } );
			dispatch(updateProductStock(newStock));
		} catch (error) {
			console.log(error);
		}
	}
}




const updateProductStock = ( stock ) => ({
	type: types.productUpdateStock,
	payload: stock,
});