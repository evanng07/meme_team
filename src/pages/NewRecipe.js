import React from 'react';

const NewRecipe = () => {
    return (
        <div className = "border">
            <div >
                <p>Recipe Page</p>
                <form>
                    <label>Title</label>
                    <input type="text"/>

                    <label>Body</label>
                    <textarea></textarea>

                    <label>Picture</label>
                    <input type="file" />
                    <button>Post Recipe</button>
                </form>
            </div>
        </div>
    )
}

export default NewRecipe
