import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientList = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
         const newIngredient= formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="ingredients-form">
                <input
                type="text"
                placeholder="e.g. Oregano"
                aria-label="Add Ingredients"
                name="ingredient"
                />
                <button >Add Ingredients</button>
            </form>

            <ul>
                {ingredientList}
            </ul>
        </>


    )
}