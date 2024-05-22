import React from 'react'
import { useRouteError } from 'react-router-dom'

export function Error() {

    const error = useRouteError();
    console.log( error )
    return (
        <div className='container text-center alert alert-danger mt-5'>
            <h1>Error occurs</h1>
            <p>{error.message}</p>
        </div>
    )
}
