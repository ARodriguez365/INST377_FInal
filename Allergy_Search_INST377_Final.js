document.getElementById("allergy-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from refreshing the page
    
    // Get the selected allergies
    const allergySelect = document.getElementById("allergy-select");
    const selectedAllergies = Array.from(allergySelect.selectedOptions).map(option => option.value);

    // Call a function to filter recipes based on allergies
    findRecipesByAllergy(selectedAllergies);
});

// Example function to filter recipes based on selected allergies
function findRecipesByAllergy(allergies) {
    // Simulate fetching recipes (you would replace this with actual API or database queries)
    const recipes = [
        { name: "Peanut Butter Cookies", ingredients: ["peanut", "sugar", "flour"], instructions: "Bake at 350 degrees for 10 minutes." },
        { name: "Gluten-Free Pancakes", ingredients: ["rice flour", "milk", "egg"], instructions: "Mix ingredients and cook in a pan." },
        { name: "Egg-Free Chocolate Cake", ingredients: ["cocoa", "sugar", "flour"], instructions: "Bake at 325 degrees for 20 minutes." },
        { name: "Vegetable Stir Fry", ingredients: ["carrot", "soy sauce", "broccoli"], instructions: "Stir fry in a hot pan for 5 minutes." }
    ];

    // Filter recipes based on the allergies
    const filteredRecipes = recipes.filter(recipe => {
        return !recipe.ingredients.some(ingredient => allergies.includes(ingredient));
    });

    // Display filtered recipes
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.classList.add("recipe");

            const recipeName = document.createElement("h4");
            recipeName.textContent = recipe.name;
            recipeElement.appendChild(recipeName);

            const recipeInstructions = document.createElement("p");
            recipeInstructions.textContent = "Instructions: " + recipe.instructions;
            recipeElement.appendChild(recipeInstructions);

            const recipeIngredients = document.createElement("p");
            recipeIngredients.textContent = "Ingredients: " + recipe.ingredients.join(", ");
            recipeElement.appendChild(recipeIngredients);

            resultsDiv.appendChild(recipeElement);
        });
    } else {
        resultsDiv.innerHTML = "<p>No recipes found for the selected allergies.</p>";
    }
}
