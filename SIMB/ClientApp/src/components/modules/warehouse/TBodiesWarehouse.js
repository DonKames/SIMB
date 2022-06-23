import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startDeletingCategory } from '../../../actions/modules/warehouse';
import { ModalEditCategory } from './subAdminScreen/ModalEditCategory';


export const TBodiesWarehouse = ( {slice} ) => {

	const dispatch = useDispatch();

	const activeWarehouse = useSelector( state => state.warehouse.warehouse.activeWarehouse );

	const handleDeleteCategory = (id) => {
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
			  dispatch(startDeletingCategory(id, activeWarehouse));
			}
	  });
		
	}

  	return (
		<tbody>
	  		{
				slice?.map( ( category, index ) => {
		  			return (
						<tr key={ index }>
			  				<td className="align-middle">{category.id}</td>
			  				<td className="align-middle">{category.name}</td>
			  				<td className="align-middle"><ModalEditCategory categoryId={category.id} />
                        <Button size="sm" variant="danger" className="ms-1" onClick={() => handleDeleteCategory(category.id)}>X</Button></td>
						</tr>
		  			)
				} )
	  		}
		</tbody>
  	)
}