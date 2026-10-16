import Header from "./Header";
import AllMeals from './AllMeals'
import VegeterianMeals from './VegeterianMeals'
import NonVegeterianMeals from './NonVegeterianMeals'
import AffordableMeals from './AffordableMeals'
import NoOfVegMeals from './NoOfVegMeals'
import NoOfNonVegMeals from './NoOfNonVegMeals'
import AverageMealPrice from "./AverageMealPrice.jsx";

function RestaurantMenu() {

    return(
        <div className="bg-danger bkg-image ">
        <div className="container py-3">
            <Header />
            <AllMeals />
            <VegeterianMeals />
            <NonVegeterianMeals />
            <AffordableMeals />
            <NoOfVegMeals />
            <NoOfNonVegMeals />
            <AverageMealPrice />
         </div>
         </div>
    )
}
export default RestaurantMenu