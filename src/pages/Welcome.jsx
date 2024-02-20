import Style from './Welcome.module.css'
import {Link} from "react-router-dom";

export default function Welcome() {
    return (
        <div className={Style.Welcome}>
            <header className='h1'>
                Welcome
            </header>
            <p className='text-secondary'>Login to access the system. <Link to='/login'>Click Here.</Link></p>
        </div>
    )
}
