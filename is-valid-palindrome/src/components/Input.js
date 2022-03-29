import React from 'react'
import classes from "./Input.module.css"

const Input = () => {
    return (

        <form className={classes.container}>
            <input className={classes.input} type="text" placeholder='Add a word or sentence' />
            <button type='submit' className={classes.submit}>Submit</button>
        </form>

    )
}

export default Input