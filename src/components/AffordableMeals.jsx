import meals from "../data/meals"

function AffordableMeals(){

    const affordableMeals = meals.filter((aff) => aff.price <= 800)
    const displayAffordableMeals = affordableMeals.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4" key={dis.name}>
            <div className="card h-100 bg-secondary shadow-sm">
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
           <h3 className=" mt-4 mb-4 card h-100 w-100 bg-danger">Affordable Meals</h3>
             <div className="row g-4">
                  {displayAffordableMeals}
             </div>
        </section>
    )
}

export default AffordableMeals