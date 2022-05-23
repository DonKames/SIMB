import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const TBodyProduct = () => {

	const product = useSelector(state => state.warehouse.product);

	return (
		<tbody>
			{product.map(product => (
				<tr key={product.id}>
					<td className="align-middle">{product.id}</td>
					<td className="align-middle">{product.name}</td>
					<td className="align-middle">{product.category}</td>
					<td className="align-middle">{product.subCategory}</td>
					<td className="align-middle">{product.qty}</td>
					<td className="align-middle"><Button>X</Button></td>
					<td className="align-middle">{product.disabled ? "Si" : "No"}</td>
				</tr>
			))}
		</tbody>
	);
};