import React, { FunctionComponent } from "react";
import './item.style.css';

type ItemComponentProps = {
    value : number;
    setValue: () => void;
    name?: string;
    valid? : boolean;
}

const ItemComponent : FunctionComponent<ItemComponentProps> = (props: ItemComponentProps) => (
    <div>
    <h1 className={props.valid ? 'title1' : 'title2' }>Hello world from Item : { props.value} </h1>
    {props.name && <p>(props.name)</p>} 
    {props.valid && <p>Valid</p>} 
    <button onClick={ props.setValue}> +1</button>
    </div>
   );
   
   export default ItemComponent;
   