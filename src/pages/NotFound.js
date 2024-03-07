import {Link, useNavigate} from "react-router-dom";
import {HomeIcon} from "@heroicons/react/24/solid";
import {ArrowUturnLeftIcon} from "@heroicons/react/20/solid";

const NotFound = () => {

    const navigate = useNavigate();
    return (
        <div className='error'>
            <div className="container">
                <h3 className='error__title'>Сторінка не знайдена!</h3>
                <p className='error__text'>Сторінки з таким URL не існує.</p>
                <div className="error__actions">
                    <Link className='error__link' to='/'>
                        <HomeIcon width={20}/>
                        <span>До дому</span>
                    </Link>
                    <button className='error__link' onClick={() => navigate(-1)}>
                        <ArrowUturnLeftIcon width={20}/>
                        <span>Назад</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default NotFound;