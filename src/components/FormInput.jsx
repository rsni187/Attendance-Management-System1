const FormInput = ({
        name,
        label,
        type,
        value,
        change,
        placeholder
    }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={name || ''} className={`form-label`}>{label || ''}</label>
            <input
                type={type || 'text'}
                name={name || ''}
                id={name || ''}
                className={`form-control`}
                value={value || ''}
                onChange={change?
                    (e)=>change(e.target.value)
                    :
                    null
            }
                placeholder={placeholder || ''}
            />
        </div>
    );
};

export default FormInput;
