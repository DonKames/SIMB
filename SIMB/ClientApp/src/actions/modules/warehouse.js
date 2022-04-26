import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";




export const startSavingWarehouse = (warehouse) => {
    
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
    try {
      const docRef = await addDoc(
        collection(db, uid, "warehouse", "warehouses"), warehouse
      );

      console.log(docRef);

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

export const loadWarehouses = () => {}