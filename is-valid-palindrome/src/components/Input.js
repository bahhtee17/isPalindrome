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
        for (let i = 0; i < value.length; i += 1) {
            if (value[i] !== value[value.length - 1 - i]) {
                //return dispatch({ type: "ADD_FALSE_ITEM", payload: value })
                return false
            }
        }

        return dispatch({ type: "ADD_TRUE_ITEM", payload: value })

    }








    return (
        <div className={classes.container}>
            <form onSubmit={submitHandler} className={classes.container}>
                <input value={value} onChange={onChangeHandler} className={classes.input} type="text" placeholder='Add a word or sentence with palindrome' />
                <button type='submit' className={classes.submit}>Submit</button>
            </form>
            <div className={classes.container2}>

                <div style={{ color: "#1fe9e5" }}>
                    {trueValue.map((tvalue, i) => { return <Item exTrue={tvalue} id={i} /> })}
                </div>


            </div>

        </div>
    )
}
export default Input;