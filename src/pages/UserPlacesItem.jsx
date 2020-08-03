import React, { useState, useContext } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import "../style/UserPlacesItem.css";
import { Modal } from "../shared/Modal";
import { Map } from "../shared/Map";
import { AuthContext } from "../context/auth-context";

export const UserPlacesItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  const showDelWarn = () => setShowDel(true);
  const cancelDel = () => setShowDel(false);
  const confirmDel = () => {
    setShowDel(false);
    console.log("DELETING...");
  };
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <Modal
        show={showDel}
        onCancel={cancelDel}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDel}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDel}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone later.
        </p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              VIEW ON MAP
            </Button>
            {auth.loggedIn && (
              <>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={showDelWarn}>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
