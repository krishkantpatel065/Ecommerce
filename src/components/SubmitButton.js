import React from 'react'
import { useFormState } from 'react-dom';
const SubmitButton = () => {
    const { pending } = useFormState();
    console.log(pending);
    
    return (
        <div>
            <button type='submit' disabled={pending}>{pending ? " Submitting" : "Submit"}</button>
        </div>
    )
}

export default SubmitButton
