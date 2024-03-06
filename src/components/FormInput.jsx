import FormError from "./FormError";

const FormInput = ({
        name,
        label,
        type,
        value,
        change,
        placeholder,
        error
    }) => {
    return (
        <div className={`mb-4 col`}>
            <label htmlFor={name || ''} className={`form-label`}>{label || ''}</label>
            <input
                type={type || 'text'}
                name={name || ''}
                id={name || ''}
                className={`form-control`}
                defaultValue={value || ''}
                onChange={change?change:null}
                placeholder={placeholder || ''}
            />
            {error && 
            <FormError>
                {error} 
            </FormError>
            }
        </div>
    );
};

export default FormInput;
