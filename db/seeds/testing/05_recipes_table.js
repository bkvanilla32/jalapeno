//let date = new Date();
//date.setDate(date.getDate() + 1)
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipes').del()
        .then(function () {
            // Inserts seed entries
            return knex('recipes').insert([{
                id: 1,
                recipe_name: "Fresh Tomato Salad",
                description: "Fresh garden tomatoes topped with herbs and \
                a simple olive oil and vinegar mixture.",
                directions: "1. Place tomatoes, red onion, and bocconcini \
                (if using) in shallow bowl. \n2. Drizzle with olive oil and \
                red wine vinegar. Toss to combine. \n3. Season with salt, \
                pepper, and fresh herbs to taste.",
                preparationTime: "10 min",
                cookTime: "0 min",
                portions: 4,
                notes: "Great to put in the fridge!"
            },
            {
                id: 2,
                recipe_name: "Lemonade",
                description: "There's nothing more refreshing to quench your \
                thirst on a hot summer day than a tall ice cold glass of this \
                lemonade!It's incredibly easy to make and a million times \
                better than any store-bought mix.",
                directions: "1.In a small saucepan combine sugar and 2 cups \
                water. Bring to a boil, while stirring frequently to dissolve \
                sugar. All to cool to room temperature, about 30 minutes. \n\
                2.In a large pitcher stir together sugar syrup mixture, 7 \
                cups cold water and lemon juice. Add ice and serve cold. \
                Store in refrigerator.",
                preparationTime: "10 min",
                cookTime: "5 min",
                portions: 10,
                notes: "Best during a hot summer day!"
            },
            {
                id: 3,
                recipe_name: "Insalata Caprese",
                description: "Ripe tomatoes and top-quality mozzarella and \
                olive oil make the difference.",
                directions: "1.On a large platter, alternate and overlap the\
                tomato slices, mozzarella cheese slices, and basil leaves. \
                Drizzle with olive oil. Season with sea salt and pepper.",
                preparationTime: "10 min",
                cookTime: "15 min",
                portions: 6,
                notes: "Because this salad is so simple, fresh, top-quality\
                tomatoes and mozzarella are important."
            },
            {
                id: 4,
                recipe_name: "Classic Macaroni Salad",
                description: "This is a salad that everyone seems to love.\
                I always get lots of compliments on this recipe and it is \
                just a pleasing taste that seems to suit everyone.",
                directions: "1.Bring a large pot of lightly salted water\
                to a boil. Add the macaroni, and cook until tender, about\
                8 minutes. Rinse under cold water and drain. \n\
                In a large bowl, mix together the mayonnaise, vinegar,\
                sugar, mustard, salt and pepper. Stir in the onion, celery,\
                green pepper, carrot, pimentos and macaroni. Refrigerate for \
                at least 4 hours before serving, but preferably overnight.",
                preparationTime: "20 min",
                cookTime: "10 min",
                portions: 10,
                notes: "Aluminum foil can be used to keep food moist, \
                cook it evenly, and make clean-up easier."
            },
            {
                id: 5,
                recipe_name: "Spicy Mexican Tuna Salad",
                description: "Spice up your tuna fish with this easy \
                modified recipe that one of my student's families \
                made for me - authentic Mexican! Serve with tortilla chips.",
                directions: "1.Mix tuna, peas, chipotle peppers, mayonnaise,\
                dried minced onion, garlic salt, and black pepper in a bowl \
                until thoroughly combined.",
                preparationTime: "10 min",
                cookTime: "10 min",
                portions: 8,
                notes: "Per Serving: 47 calories; 1.6 g fat; 3 g carbohydrates;\
                5 g protein; 5 mg cholesterol; 96 mg sodium."
            },
            {
                id: 6,
                recipe_name: "Sweet Potato Breakfast Bake",
                description: "Paleo breakfast.",
                directions: "1.Preheat oven to 400 degrees F (200 degrees C).\n\
                2.Heat olive oil in a large skillet over medium heat. Add sweet potato;\
                cover and cook, stirring occasionally, until tender, 8 to 10 minutes. \
                Transfer to a large bowl.  \n\
                3.Cook and stir sausage in the same skillet over medium-high heat \
                until crumbled and browned, about 5 minutes. Add to the sweet potato in the bowl.\n\
                4. Cook and stir onion and red bell pepper in the same skillet until tender, \
                about 3 minutes. Season with salt and pepper. Add mushrooms and kale;\
                cook until kale softens, about 3 minutes more. Transfer to the bowl.\n\
                5. Whisk eggs, water, thyme, salt, and pepper together in a small bowl. \
                Stir into the sausage mixture. Pour into a large baking dish. \
                Whisk eggs, water, thyme, salt, and pepper together in a small bowl. \
                Stir into the sausage mixture. Pour into a large baking dish. \n\
                6. Bake in the preheated oven until sweet potato starts to brown, 20 to 25\
                minutes. Let stand for 5 minutes. Garnish with green onion.",
                preparationTime: "20 min",
                cookTime: "39 min",
                portions: 4,
                notes: "Per Serving: 489 calories; 34.2 g fat; 19.7 g carbohydrates; \
                25.6 g protein; 297 mg cholesterol; 1182 mg sodium."
            },
                                           
            ]);
        });
}
