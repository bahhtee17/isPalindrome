import React from 'react'
import classes from "./Item.module.css"
const Item = (props) => {
    return (
        <div className={classes.container}>

            <div><h3>{props.exTrue}</h3></div>


            <div><h3>{props.exFalse}</h3></div>
        </div>
    )
}

export default Item