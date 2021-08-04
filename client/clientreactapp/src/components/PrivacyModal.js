import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Qui velit magna velit ipsum qui officia veniam excepteur aliqua sunt
            velit fugiat. Qui velit magna velit ipsum qui officia veniam
            excepteur aliqua sunt velit fugiat.Qui velit magna velit ipsum qui
            officia veniam excepteur aliqua sunt velit fugiat. Qui velit magna
            velit ipsum qui officia veniam excepteur aliqua sunt velit
            fugiat.Qui velit magna velit ipsum qui officia veniam excepteur
            aliqua sunt velit fugiat. Qui velit magna velit ipsum qui officia
            veniam excepteur aliqua sunt velit fugiat.Qui velit magna velit
            ipsum qui officia veniam excepteur aliqua sunt velit fugiat. Qui
            velit magna velit ipsum qui officia veniam excepteur aliqua sunt
            velit fugiat.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;