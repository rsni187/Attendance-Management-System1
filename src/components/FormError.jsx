export default function FormError({children}){
    return (<p className={`alert alert-danger rounded px-4 py-2`}>{children}</p>)
}