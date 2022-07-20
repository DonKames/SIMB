import { useState } from "react";
import { Modal } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { startSavingPlan } from "../../../actions/subscription";


export const ModalAddPlan = () => {

    const dispatch = useDispatch();

    const [showAddForm, setShowAddForm] = useState(true);

    const [ formValues, handleInputChange ] = useForm({
        planId: "",
        name: "",
        price: "",
        interval: "",
        interval_count: "",
        trial_period_days: "",

    });

    const { planId, name, price, interval_count, trial_period_days } = formValues;

    const handleOpenModal = () => {
        setShowAddForm(true);
    };

    const handleCloseModal = () => {
        setShowAddForm(false);
    };

    const handleSavePlan = (e) => {
        e.preventDefault();
        dispatch(startSavingPlan(planId, name, price, interval_count, trial_period_days));
        console.log(formValues);
        setShowAddForm(false);
    }

  return (
    <>
    <Button variant="primary" onClick={handleOpenModal}>
        Agregar Plan
    </Button>
    <Modal show={showAddForm} onHide={handleCloseModal}>
        <Form onSubmit={handleSavePlan}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Plan Id</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="PlanId"
                        name="planId"
                        onChange={handleInputChange}
                        value={planId}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInputChange}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Precio"
                        name="price"
                        onChange={handleInputChange}
                        value={price}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Intervalo</Form.Label>
                    <Form.Select>
                        <option>Seleccione el Intervalo.</option>
                        <option value="1">Diario</option>
                        <option value="2">Semanal</option>
                        <option value="3">Mensual</option>
                        <option value="4">Anual</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cantidad del Intervalo</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="99"
                        name="interval_count"
                        onChange={handleInputChange}
                        value={interval_count}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Periodo de tiempo Trial</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="15"
                        name="trial_period_days"
                        onChange={handleInputChange}
                        value={trial_period_days}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleCloseModal}>
                    Cancelar
                </Button>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
    </>
  )
}
