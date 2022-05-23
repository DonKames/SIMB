import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const TBodyProducts = () => {

	const products = useSelector(state => state.warehouse.products);

	return (
		<tbody>
			{products.map(products => (
				<tr key={products.id}>
					<td className="align-middle">{products.id}</td>
					<td className="align-middle">{products.name}</td>
					<td className="align-middle">{products.category}</td>
					<td className="align-middle">{products.subCategory}</td>
					<td className="align-middle">{products.qty}</td>
					<td className="align-middle"><Button>X</Button></td>
					<td className="align-middle">{products.disabled ? "Si" : "No"}</td>
				</tr>
			))}
		</tbody>
	);
};