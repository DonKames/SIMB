import React from 'react';

export const TBodiesWarehouse = ( slice ) => {
  	return (
		<tbody>
	  		{
				slice?.map( ( category, index ) => {
		  			return (
						<tr key={ index }>
			  				<td className="align-middle">{category.id}</td>
			  				<td className="align-middle">{category.name}</td>
			  				<td className="align-middle">{category.disabled ? "Si" : "No"}</td>
						</tr>
		  			)
				} )
	  		}
		</tbody>
  	)
}