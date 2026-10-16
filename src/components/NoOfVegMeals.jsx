import meals from "../data/meals"

function NoOfVegMeals(){ 
    const vegMeals = meals.filter((veg) => veg.vegetarian === true)
    const noOfVegMeals = vegMeals.length

    return(
        <section>
                 <h3 className=" mt-4 mb-4 card h-100 w-100 bg-danger">Number of Vegeterian Meals</h3>
                 <div className="card h-100 bg-success shadow-sm">
                     <div className="card-body">
                         <div className="text-center fs-5">
                             {noOfVegMeals}
                         </div>
                     </div>
                 </div>
         </section>
    )
}
export default NoOfVegMeals