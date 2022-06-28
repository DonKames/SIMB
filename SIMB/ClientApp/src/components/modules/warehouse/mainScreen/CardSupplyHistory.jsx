import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const CardSupplyHistory = () => {

    const supplyHistory = useSelector( state => state.warehouse.supplyHistory );

  return (
    <>
        <Card className='h-100'>
            <Card.Header>
                <Card.Title>Historial</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>IdElemento</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyHistory.map( ( supply, index ) => (
                            <tr key={index}>
                                <td>{supply.id}</td>
                                <td>{supply.quantity}</td>
                                <td>{ new Date( supply.date ).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </>
  )
}
