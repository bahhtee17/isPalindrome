import React, { useState } from 'react'
import classes from "./Input.module.css"
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'




const Input = () => {
    const dispatch = useDispatch()
    const trueValue = useSelector(state => state.trueValue.trueValue)
    const falseValue = useSelector(state => state.falseValue.falseValue)
    const [value, setValue] = useState("")



    const onChangeHandler = (e) => {
        setValue(e.target.value)

    }

    const submitHandler = (e) => {

        e.preventDefault();
        setValue("")
        addItemsHandler()

    }



    const addItemsHandler = () => {
        for (let i = 0; i <= value.length; i += 1) {
            if (value[i] !== value[value.length - 1 - i]) {
                return dispatch({ type: "ADD_FALSE_ITEM", payload: value })
            }
        }

        dispatch({ type: "ADD_TRUE_ITEM", payload: value })

    }








    return (
        <div>
            <form onSubmit={submitHandler} className={classes.container}>
                <input onChange={onChangeHandler} className={classes.input} type="text" placeholder='Add a word or sentence' />
                <button type='submit' className={classes.submit}>Submit</button>
            </form>
            <div className={classes.container}>
                {trueValue.map((tvalue, i) => { return <Item exTrue={tvalue} id={i} /> })}
                {falseValue.map((fvalue, i) => { return <Item exFalse={fvalue} id={i} /> })}
            </div>

        </div>
    )
}
export default Input;