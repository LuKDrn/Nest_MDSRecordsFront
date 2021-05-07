import React, { FunctionComponent } from "react";
import './item.style.css';
import 'bootstrap/dist/css/bootstrap.css';

type ItemComponentProps = {
    value: number;
    setValue: () => void;
    name?: string;
    valid?: boolean;
}
const logo = require('./logo.svg');

const Item: FunctionComponent<ItemComponentProps> = (props: ItemComponentProps) => (
    <div className="App">
        <div className="App-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <p className="App-intro text-info">
                Nest MDSRecords de Lucas DEROUIN (Application en construction)
      </p>
        </div>
    </div>
);

export default Item;
