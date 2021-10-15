import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../index.css'

const AddSearch = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 1 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddSearch.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddSearch