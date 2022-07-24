import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { startPayingSubscription } from "../../actions/subscription";
import { useForm } from "../../hooks/useForm";
import { sendFlow } from "../../helpers/flow";

export const BasicSubscriptionModal = () => {

    const [show, setShow] = useState(false);

    const { name: userName, email: userEmail } = useSelector(state => state.auth);

    const [formValues] = useForm({
        name: userName,
        description: "Plan Básico - 1 mes",
        amount: "8000",
        email: userEmail,
    });

    const { description, amount } = formValues;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(formValues);
        startPayingSubscription(formValues);

    }

    const startPayingSubscription = async (params) => {
    

        const commerceOrder = Date.now();
        params.commerceOrder = commerceOrder;
        params.subject = "Plan Básico";
        params.urlConfirmation = "https://5a23-186-104-237-91.ngrok.io/";
        params.urlReturn = "https://5a23-186-104-237-91.ngrok.io/";
        params.apiKey = process.env.REACT_APP_FLOW_API_KEY;

        return await sendFlow("payment/create", params, "POST")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = data.url + "?token=" + data.token;
            //navigate("/" + data.url + "?token=" + data.token);
        });
    }

    return (
    <>
        <Button onClick={handleShow}>Suscribir</Button>
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Suscribirse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="name" value={userName} readOnly />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Descripción" name="description" value={description} readOnly />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="text" placeholder="Valor" name="amount" value={amount} readOnly />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" value={userEmail} required readOnly />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Suscribirse
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
  )
}
