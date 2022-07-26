import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';

export const ModalInfoSku = ({checked, setChecked, idSku}) => {

    const sku = useSelector( state => state.warehouse.skus ).find( sku => sku.id === idSku );
    const category = useSelector( state => state.warehouse.categories ).find( category => category?.id === sku?.category );
    const subCategory = useSelector( state => state.warehouse.subCategories ).find( subCategory => subCategory?.id === sku?.subCategory );

    console.log(subCategory);

    const handleClose = () => setChecked(false);
    
  return (
    <>
        <Modal show={checked} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Info SKU</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-6">
                        <p>SKU:</p>
                        <p>Nombre:</p>
                        <p>Stock:</p>
                        <p>Categoría:</p>
                        <p>Subcategoría:</p>
                        <p>Marca:</p>
                        <p>Modelo:</p>
                        <p>Descripción:</p>

                    </div>
                    <div className="col-6">
                        <p>{ sku?.sku }</p>
                        <p>{ sku?.name }</p>
                        <p>{ sku?.stock ? sku.stock : '0' }</p>
                        <p>{ category?.name }</p>
                        <p>{ subCategory?.name === undefined ? "---" : subCategory.name }</p>
                        <p>{ sku?.brand }</p>
                        <p>{ sku?.model }</p>
                        <p>{ sku?.description }</p>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
