import meals from "../data/meals"

function NoOfNonVegMeals(){
    const meatMeals = meals.filter((meat) => meat.vegetarian === false)
    const noOfNonVegMeals = meatMeals.length

    return(
        <section>
                 <h3 className=" mt-4 mb-4 card h-100 w-100 bg-danger">Number of Non-Vegeterian Meals</h3>
                 <div className="card h-100 bg-info shadow-sm">
                     <div className="card-body">
                         <div className="fs-5 text-center">
                             {noOfNonVegMeals}
                         </div>
                     </div>
                 </div>
             </section>
    )
}
export default NoOfNonVegMeals