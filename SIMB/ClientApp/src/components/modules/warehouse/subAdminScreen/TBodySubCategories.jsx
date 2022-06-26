import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startDeletingSubCategory } from '../../../../actions/modules/warehouse';
import { ModalEditCategory } from '../subAdminScreen/ModalEditCategory';


export const TBodySubCategories = ( {slice} ) => {

	const dispatch = useDispatch();

	const activeWarehouse = useSelector( state => state.warehouse.warehouse.activeWarehouse );

	const handleDeleteSubCategory = (id) => {
		Swal.fire({
			title: "¿Estas seguro?",
		  text: "Una vez eliminado, no podrás recuperarlo",
		  icon: "warning",
		  iconColor: "#f44336",
		  showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, Eliminar",
			cancelButtonText: "Cancelar",
	  }).then((result) => {
			if (result.value) {
			  dispatch(startDeletingSubCategory(id, activeWarehouse));
			}
	  });
		
	}

  	return (
		<tbody>
	  		{
				slice?.map( ( subCategory, index ) => {
		  			return (
						<tr key={ index }>
			  				<td className="align-middle">{subCategory.name}</td>
			  				<td className="align-middle text-end">
								<ModalEditCategory subCategoryId={subCategory.id} />
                        		<Button size="sm" variant="danger" className="ms-1" onClick={() => handleDeleteSubCategory(subCategory.id)}>X</Button>
							</td>
						</tr>
		  			)
				} )
	  		}
		</tbody>
  	)
}