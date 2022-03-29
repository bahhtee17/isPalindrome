import React, { useState, useEffect } from 'react'
import classes from "./Input.module.css"
import { useSelector, useDispatch } from 'react-redux'


const Input = () => {
    const dispatch = useDispatch()
    const trueValue = useSelector(state => state.trueValue.trueValue)
    const falseValue = useSelector(state => state.falseValue.falseValue)
    const [value, setValue] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        setValue("")
    }
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }



    const addItemsHandler = () => {
        let i = 0;

        while (i < value.length) {
            if (value[i] !== value[value.length - 1 - i]) {
                return dispatch({ type: "ADD_FALSE_ITEM", payload: value })

            }
        }

        dispatch({ type: "ADD_TRUE_ITEM", payload: value })
    }


    return (

        <form onSubmit={submitHandler} className={classes.container}>
            <input value={value} onChange={onChangeHandler} className={classes.input} type="text" placeholder='Add a word or sentence' />
            <button type='submit' onClick={addItemsHandler} className={classes.submit}>Submit</button>

            {falseValue.map(result => result)}
        </form>

    )
}

export default Input