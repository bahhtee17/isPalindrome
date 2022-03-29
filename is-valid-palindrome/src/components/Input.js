import React, { useState } from 'react'
import classes from "./Input.module.css"
import { useSelector, useDispatch } from 'react-redux'


const Input = () => {
    const dispatch = useDispatch()
    const trueValue = useSelector(state => state.trueValue.trueValue)
    const falseValue = useSelector(state => state.falseValue.falseValue)
    const [value, setValue] = useState([])
    console.log(trueValue)
    console.log(falseValue)
    const submitHandler = (e) => {
        e.preventDefault();
        setValue([...value, { trueValue, falseValue }])


    }
    const onChangeHandler = (e) => {
        setValue(e.target.value)

    }


    return (

        <form onSubmit={submitHandler} className={classes.container}>
            <input value={value} onChange={onChangeHandler} className={classes.input} type="text" placeholder='Add a word or sentence' />
            <button type='submit' className={classes.submit}>Submit</button>
            {value}
        </form>

    )
}

export default Input