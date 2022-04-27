import React from 'react'
import { useSelector } from 'react-redux';

export const TBodyEmployees = () => {

	const employees = useSelector(state => state.warehouse.employees);

	return (
		<tbody>
			{employees.map(employee => (
				<tr key={employee.id}>
					<td className="align-middle">{employee.rut}</td>
					<td className="align-middle">{employee.name}</td>
					<td className="align-middle">{employee.email}</td>
					<td className="align-middle">{employee.phone}</td>
					<td className="align-middle">{employee.disabled ? "Si" : "No"}</td>
				</tr>
			))}
		</tbody>
	);
};