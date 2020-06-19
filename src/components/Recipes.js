import React from "react";



const Recipes=props =>{
    const {recipe}=props;
    return(
        <div class="row">
            {recipe.map(recipe =>(
                <div class="col-md-3">
                    <img src={recipe.recipe.image} className="img-fluid w-50" />
                    <div class="card-body py-2 text-center">
            <h5>{recipe.recipe.label}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        {recipe.recipe.ingredientLines.map(ingredients=>
                            (
                            <li className="list-group-item">{ingredients}</li>
                            ))}
                    </ul>
            ))}
        </div>
    )
}

export default Recipes;