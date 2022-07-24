import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const SubscribedMenu = () => {

    const subscribed = useSelector(state => state.subscription);

    console.log(subscribed.warehouse);

    return (
        <>
            {subscribed.warehouse && <Link to="pvt/modules/warehouse" className="nav-link">
              Bodegas
            </Link>}
        </>
    )
}
