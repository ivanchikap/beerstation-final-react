import {NavLink} from "react-router-dom";
import SouvenirsIcon from "./SouvenirsIcon";
import BaIcon from "./BaIcon";
import AppetizerIcon from "./AppetizerIcon";
import AlcogolIcon from "./AlcogolIcon";

const CategoriesItem = ({type}) => {
    let title = '';
    let iconImage = '';
    switch (type) {
        case 'alcohol':
            title = 'Сьогодні на кранах';
            iconImage = <AlcogolIcon />;
            break;
        case 'ba':
            title = 'Б/А пиво та соки';
            iconImage = <BaIcon />;
            break;
        case 'appetizer':
            title = 'Смаколики';
            iconImage = <AppetizerIcon />;
            break;
        case 'souvenirs':
            title = 'Сувеніри';
            iconImage = <SouvenirsIcon />;
            break;
        default:
            title = 'Default title, edit CategoriesItem component';
            break
    }

    return (
        <div className="categories__item">
            <NavLink to={`products/${type}`} className="cat-card">
                {iconImage}
                <div className="cat-card__bottom">
                    <h3>{title}</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default CategoriesItem;