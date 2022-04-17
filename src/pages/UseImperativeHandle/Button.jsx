import { forwardRef, useImperativeHandle, useState } from 'react'

// forwardRef func is allow to transform func component and allowed to accept ref from parent

const Button = forwardRef((props, ref) => {
    const [show, setShow] = useState(false)

    // useImperativeHandle to allowed define function based on the ref and passing function from child to parent component
    useImperativeHandle(ref, () => ({
        toggleHandler() {
            setShow(prev => prev = !show)
        }
    }))
    
    return (
        <>
            <button >Button From Child</button>
            {show && <span>Hide Toggle!</span>}
        </>
    )
})

export default Button