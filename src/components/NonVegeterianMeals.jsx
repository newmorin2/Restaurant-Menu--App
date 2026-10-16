import meals from "../data/meals"

function NonVegeterianMeals(){
    const meatMeals = meals.filter((meat) => meat.vegetarian === false)
    const displayMeatMeals = meatMeals.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4" key={dis.name}>
            <div className="card h-100 bg-info shadow-sm">
                <div className="card-body">
                    <img 
                    src={dis.image} 
                    alt={dis.name} 
                    className='card-img-top mb-3 rounded' 
                    style={
                        {height:'170px',
                        objectFit:'cover'
                        }
                        }/>
                    <h4>{dis.name}</h4>
                    <h5>{dis.category }</h5>
                    <h5>Ksh {dis.price}</h5>
                </div>
            </div>
        </div>
    ))

    return(
        <section>
            <h3 className=" mt-4 mb-4 card h-100 w-100 bg-danger">Non-Vegeterian Meals</h3>
                <div className="row g-4">
                    {displayMeatMeals}
                </div>
        </section>
    )
}

export default NonVegeterianMeals