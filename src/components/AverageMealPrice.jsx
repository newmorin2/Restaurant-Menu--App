import meals from "../data/meals"

function AverageMealPrice(){

    const totalMealP = meals.reduce((acc,avg) => acc + avg.price,0)
    const avgMealP = Math.round(totalMealP / meals.length)

    return(
         <section>
                 <h3 className=" mt-4 mb-4 card h-100 w-100 bg-danger">Average Meal Price</h3>
                 <div className="card h-100 bg-primary shadow-sm">
                     <div className="card-body">
                         <div className="text-center fs-5">
                             Ksh {avgMealP}
                         </div>
                     </div>
                 </div>
             </section>
    )
}
export default AverageMealPrice