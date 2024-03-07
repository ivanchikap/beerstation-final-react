import {Link, useNavigate, useRouteError} from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'
import {ArrowUturnLeftIcon} from "@heroicons/react/20/solid";

const Error = ({externalError}) => {
    let error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className='error'>
            <div className="container">
                <h3 className='error__title'>Сталася помилка!</h3>
                <p className='error__text'>Упс, щось трапилось. Помилка: <span className='error__value'>{error?.message || error?.statusText || externalError}</span> </p>
                <div className="error__actions">
                    <Link className='error__link' to='/'>
                        <HomeIcon width={20}/>
                        <span>До дому</span>
                    </Link>
                    <button className='error__link' onClick={() => navigate(-1)}>
                       <ArrowUturnLeftIcon width={20} />
                        <span>Назад</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;