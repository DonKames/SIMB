import { Table } from "react-bootstrap";
import { TBodiesWarehouse } from "./TBodiesWarehouse";

export const TablesWarehouse = ( { tHead, tBody } ) => {
  	return (
    	<Table>
			<thead>
				<tr>
					{tHead.map( ( th, index ) => {
						return <th key={index}>{th}</th>
					} )}
				</tr>
			</thead>
			{tBody}
    	</Table>
  	);
};
