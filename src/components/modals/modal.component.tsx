import React, { FunctionComponent, ReactNode } from "react";
import { Fragment } from "react";

type ModalProps = {
    title : string;
    children? : ReactNode;
    visible? : boolean;
    onClose?: () => void;
}

const ModalComponent : FunctionComponent<ModalProps> = (props: ModalProps) => {
    function onClickClose() : void {
        if(props.onClose) {
            props.onClose();
        }
    }

    return(
        <Fragment>
            {
                props.visible && 
                <div className='container'>
                    <div className='row'>
                        <h1 className='font-weight-bold'>{props.title}</h1>
                        <p className=''>
                            { props.children }
                        </p>
                        <button className='btn' onClick={onClickClose}>Close</button>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default ModalComponent