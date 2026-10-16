import meals from '../data/meals'

function AllMeals(){

    const displayMeals = meals.map((meal) => (
        <div className="col-12 col-sm-6 col-lg-4" key={meal.name}>
            <div className="card h-100 bg-warning shadow-sm">
                <div className="card-body">
                    <img 
                    src={meal.image} 
                    alt={meal.name} 
                    className='card-img-top mb-3 rounded' 
                    style={
                        {height:'170px',
                        objectFit:'cover'
                        }
                        }/>
                    <h4>{meal.name}</h4>
                    <h5>Ksh {meal.price}</h5>
                    <h5>{meal.category}</h5>
                    <h5>{meal.vegetarian ? "Vegeterian" : "Non-vegeterian"}</h5>
                </div>
            </div>
        </div>
    ))

    return(
        <>
        <h3 className="mb-4 card h-100 w-100 bg-danger ">All Meals</h3>
            <section>
                <div className="row g-4 ">
                    {displayMeals}
                </div>
            </section>
        </>
    )
}
export default AllMeals