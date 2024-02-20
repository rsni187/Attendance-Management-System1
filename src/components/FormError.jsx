export default function FormError({message}){
    return (<p className={`mb-4 bg-danger text-light rounded px-4 py-2`}>{message || ''}</p>)
}