import readline from 'readline';

// Example of RDAs (Recommended Daily Allowances)
const rdas = {
    energy: 2230,            // kcal
    protein: 55,             // g
    carbohydrates: 330,      // g
    addedSugars: 30,         // g
    dietaryFiber: 30,        // g
    totalFat: 61.5,          // g (Average of 49-74 g)
    saturatedFat: 22,        // g
    sodium: 2000             // mg
    // Add other nutrients like vitamins and minerals if needed
};

// Function to calculate percentage of RDA
function calculatePercentage(consumedValue, rdaValue) {
    if (isNaN(consumedValue) || isNaN(rdaValue)) {
        return 'N/A'; // Return 'N/A' if data is missing
    }
    return ((consumedValue / rdaValue) * 100).toFixed(2) + '%';
}

// Interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input dynamically
rl.question('Enter your consumed values (energy, protein, carbohydrates, addedSugars, dietaryFiber, totalFat, saturatedFat, sodium) in the format: "energy protein carbohydrates addedSugars dietaryFiber totalFat saturatedFat sodium": ', (input) => {
    const values = input.split(' ').map(Number); // Convert string input to array of numbers

    // Create the consumed object dynamically from user input
    const consumed = {
        energy: values[0],           // kcal
        protein: values[1],          // g
        carbohydrates: values[2],    // g
        addedSugars: values[3],      // g
        dietaryFiber: values[4],     // g
        totalFat: values[5],         // g
        saturatedFat: values[6],     // g
        sodium: values[7]            // mg
    };

    // Calculate percentages for each nutrient
    const nutritionPercentages = {
        energy: calculatePercentage(consumed.energy, rdas.energy),
        protein: calculatePercentage(consumed.protein, rdas.protein),
        carbohydrates: calculatePercentage(consumed.carbohydrates, rdas.carbohydrates),
        addedSugars: calculatePercentage(consumed.addedSugars, rdas.addedSugars),
        dietaryFiber: calculatePercentage(consumed.dietaryFiber, rdas.dietaryFiber),
        totalFat: calculatePercentage(consumed.totalFat, rdas.totalFat),
        saturatedFat: calculatePercentage(consumed.saturatedFat, rdas.saturatedFat),
        sodium: calculatePercentage(consumed.sodium, rdas.sodium)
    };

    // Display the calculated percentages
    console.log("\nNutrient consumption as a percentage of the RDA:");
    console.log(`Energy: ${nutritionPercentages.energy}`);
    console.log(`Protein: ${nutritionPercentages.protein}`);
    console.log(`Carbohydrates: ${nutritionPercentages.carbohydrates}`);
    console.log(`Added Sugars: ${nutritionPercentages.addedSugars}`);
    console.log(`Dietary Fiber: ${nutritionPercentages.dietaryFiber}`);
    console.log(`Total Fat: ${nutritionPercentages.totalFat}`);
    console.log(`Saturated Fat: ${nutritionPercentages.saturatedFat}`);
    console.log(`Sodium: ${nutritionPercentages.sodium}`);

    rl.close();
});
