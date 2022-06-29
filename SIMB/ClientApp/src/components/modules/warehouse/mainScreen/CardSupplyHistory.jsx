import { Button, Card, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadSupplyHistory, startLoadingSupplyHistory } from '../../../../actions/modules/warehouse';
import { useForm } from '../../../../hooks/useForm';

export const CardSupplyHistory = () => {
    const dispatch = useDispatch();

    
    const warehouseId = useSelector( state => state.warehouse.warehouse.activeWarehouse );
    
    let supplyHistory = useSelector( state => state.warehouse.supplyHistory );
    
    const skus = useSelector ( state => state.warehouse.skus );
    
	const [formValues, handleInputChange, reset] = useForm({
        name: "",
    });
    
    const { name, } = formValues;

    const handleFilterSupplyHistory = () => {
        
        if(name){
            supplyHistory = supplyHistory.filter(supply => supply.name === name);
            console.log(name);
            console.log(supplyHistory); 
            dispatch(loadSupplyHistory(supplyHistory));
        }
    };

    const handleResetSupplyHistoryFilter = () => {
        dispatch(startLoadingSupplyHistory(warehouseId));
        reset();
    }

  return (
    <>
        <Card className='h-100 mb-3'>
            <Card.Header>
                <Card.Title>Historial</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table hover striped>
                    <thead>
                        <tr>
                            <th>
                                <Form.Control type="text" placeholder="Buscar" list="names" name="name" value={name} onChange={handleInputChange} style={{maxWidth:'200px'}} />
                                <datalist id="names">
                                    {
                                        skus.map( ( sku, index ) => (
                                            <option key={index} value={sku.name} />
                                        ))
                                    }
                                </datalist>
                            </th>
                            <th>
                            </th>
                            <th className='text-end'>
                                <Button className="btn btn-info" onClick={handleFilterSupplyHistory}>Buscar</Button>
                                <Button className="ms-2 btn btn-warning" onClick={handleResetSupplyHistoryFilter}>Limpiar</Button>
                            </th>
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyHistory?.map( ( supply, index ) => (
                            <tr key={index}>
                                <td>{ supply?.name }</td>
                                <td>{ new Date( supply.date ).toLocaleDateString()}</td>
                                <td className={supply.quantity > 0 ? 'align-middle text-center bg-success' : 'align-middle text-center bg-danger'}>{supply.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </>
  )
}
