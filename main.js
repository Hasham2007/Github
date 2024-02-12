// Data


const listProducts = [
    {
        id: 'listProducts1',
        name: 'Raw-Almond (Badam)',
        image: './Products/nuts/Raw-Almonds.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. <br> 1-ounce (oz), or 28-gram (g):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 250,
    },
    {
        id: 'listProducts2',
        name: 'Pistachio (Pista)',
        image: './Products/nuts/Pistachios-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. <br> 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 250,
    },
    {
        id: 'listProducts3',
        name: 'Raisins (Kishmish)',
        image: './Products/dried fruits/Dried-Raisins-Golden-Jumbo-Nutstop.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Helps regulate blood pressure and aids in better digestion. <br> 1 ounce (28g) serving of Raisins:',
        keyPoints: [
            '42 calories' , 'Protein 0.5 grams ',' Fibre 0.6 grams ',' Sodium 3.6 grams ', 'Carbohydrates 11 grams', 'Sugar 9.1 grams'
        ],
        price: 250,
    },
    {
        id: 'listProducts4',
        name: 'Cashew (Kajoo)',
        image: './Products/nuts/Cashews-Raw-240-Nutstop-300x200.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'listProducts5',
        name: 'Walnuts (Akhrot)',
        image: './Products/nuts/Walnuts-Raw.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'listProducts6',
        name: 'Apricot (Khumani)',
        image: './Products/dried fruits/Dried-Apricots-Turkish.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'listProducts7',
        name: 'Pine Nut (chilghoza)',
        image: './Products/nuts/Pine-Nuts.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'listProducts8',
        name: 'Dried Fig (Injeer)',
        image: './Products/dried fruits/Dried-Figs.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Work wonders if you are struggling with reproductive and respiratory problems.<br><br> 100 grams serving of Dried Figs:',
        keyPoints: [
            '249 calories' , 'Protein 3.3 grams',' Dietary Fiber 9.8 grams ',' Calcium 162 mg ', 'Iron 2.03 mg', 'Magnesium 68 mg', 'Vitamin C 1.2 mg'
        ],
        price: 200,
    },
    {
        id: 'listProducts9',
        name: 'Peanuts (moong phali)',
        image: './Products/nuts/Peanuts-Redskin-Raw.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Work wonders if you are struggling with reproductive and respiratory problems.<br><br> 100 grams serving of Dried Figs:',
        keyPoints: [
            '249 calories' , 'Protein 3.3 grams',' Dietary Fiber 9.8 grams ',' Calcium 162 mg ', 'Iron 2.03 mg', 'Magnesium 68 mg', 'Vitamin C 1.2 mg'
        ],
        price: 200,
    },
    {
        id: 'listProducts10',
        name: 'Sunflower Seeds (Sooraj makhi ke beej)',
        image: './Products/nuts/Sunflower-In-Shell-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Work wonders if you are struggling with reproductive and respiratory problems.<br><br> 100 grams serving of Dried Figs:',
        keyPoints: [
            '249 calories' , 'Protein 3.3 grams',' Dietary Fiber 9.8 grams ',' Calcium 162 mg ', 'Iron 2.03 mg', 'Magnesium 68 mg', 'Vitamin C 1.2 mg'
        ],
        price: 200,
    },
    {
        id: 'listProducts11',
        name: 'Pumpkin seeds (kaddu ka beej)',
        image: './Products/nuts/Pumpkin-Kernels-Raw.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Work wonders if you are struggling with reproductive and respiratory problems.<br><br> 100 grams serving of Dried Figs:',
        keyPoints: [
            '249 calories' , 'Protein 3.3 grams',' Dietary Fiber 9.8 grams ',' Calcium 162 mg ', 'Iron 2.03 mg', 'Magnesium 68 mg', 'Vitamin C 1.2 mg'
        ],
        price: 200,
    },
    {
        id: 'listProducts12',
        name: 'Hazelnuts',
        image: './Products/nuts/Filberts-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Work wonders if you are struggling with reproductive and respiratory problems.<br><br> 100 grams serving of Dried Figs:',
        keyPoints: [
            '249 calories' , 'Protein 3.3 grams',' Dietary Fiber 9.8 grams ',' Calcium 162 mg ', 'Iron 2.03 mg', 'Magnesium 68 mg', 'Vitamin C 1.2 mg'
        ],
        price: 200,
    }
]


const specialProducts = [
    {
        id: 'specialProducts1',
        name: 'Almond (Special)',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts2',
        name: 'Pista',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts3',
        name: 'Kishmish',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts4',
        name: 'Kajoo',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts5',
        name: 'Akhroot',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts6',
        name: 'Khobani',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts7',
        name: 'chilgoza',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'specialProducts8',
        name: 'Injeer',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]

const limitedProducts = [
    {
        id: 'limitedProducts1',
        name: 'Almond (Limited)',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts2',
        name: 'Pista',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts3',
        name: 'Kishmish',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts4',
        name: 'Kajoo',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts5',
        name: 'Akhroot',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts6',
        name: 'Khobani',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts7',
        name: 'chilgoza',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'limitedProducts8',
        name: 'Injeer',
        image: './18-1-removebg-preview.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]
const RoastedProducts = [
    {
        id: 'roastedProducts1',
        name: 'Almond Blanched (Salted)',
        image: './Products/nuts/Almond/Almonds-Blanched-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts2',
        name: 'Almond Blanched (Unsalted)',
        image: './Products/nuts/Almond/Almonds-Blanched-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts3',
        name: 'Almond (Salted)',
        image: './Products/nuts/Almond/Almonds-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts4',
        name: 'Almond',
        image: './Products/nuts/Almond/Roasted-Almonds.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts5',
        name: 'Cashew-pieces (Salted)',
        image: './Products/nuts/Cashew/Cashew-Pieces-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts6',
        name: 'Cashew-pieces (Unsalted)',
        image: './Products/nuts/Cashew/Cashew-Pieces-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts7',
        name: 'Cashew (Salted)',
        image: './Products/nuts/Cashew/Cashews-Roasted-Salted-240.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts8',
        name: 'Cashew (Unsalted)',
        image: './Products/nuts/Cashew/Cashews-Roasted-Unsalted-240.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts9',
        name: 'Hazelnut (Salted)',
        image: './Products/nuts/HazelNuts/Filberts-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts10',
        name: 'Hazelnut (Unsalted)',
        image: './Products/nuts/HazelNuts/Macadamia-Nuts-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts11',
        name: 'Peanuts Redskin (Salted)',
        image: './Products/nuts/Peanuts/Peanuts-Redskin-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts12',
        name: 'Peanuts Redskin (Unsalted)',
        image: './Products/nuts/Peanuts/Peanuts-Redskin-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts13',
        name: 'Peanuts (Salted)',
        image: './Products/nuts/Peanuts/Peanuts-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts14',
        name: 'Peanuts (Unsalted)',
        image: './Products/nuts/Peanuts/Peanuts-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts15',
        name: 'Pecans',
        image: './Products/nuts/Pecans/Pecans-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts16',
        name: 'Pistachios (Unsalted)',
        image: './Products/nuts/Pistachios/Pistachios-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts17',
        name: 'Pistachios (Salted)',
        image: './Products/nuts/Pistachios/Roasted-Salted-Pistachios.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts18',
        name: 'Pumpkin Seeds (Salted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-In-Shell-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts19',
        name: 'Pumpkin Seeds (Unsalted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-In-Shell-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts20',
        name: 'Pumpkin Kernels (Salted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-Kernels-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts21',
        name: 'Pumpkin Kernels (Unsalted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-Kernels-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts22',
        name: 'Sunflower Seeds (Salted)',
        image: './Products/nuts/Sunflower Seeds/Sunflower-In-Shell-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts23',
        name: 'Sunflower Seeds (Unsalted)',
        image: './Products/nuts/Sunflower Seeds/Sunflower-In-Shell-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]
const SaltedProducts = [
    {
        id: 'roastedProducts1',
        name: 'Almond Blanched (Salted)',
        image: './Products/nuts/Almond/Almonds-Blanched-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts3',
        name: 'Almond (Salted)',
        image: './Products/nuts/Almond/Almonds-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts5',
        name: 'Cashew-pieces (Salted)',
        image: './Products/nuts/Cashew/Cashew-Pieces-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts7',
        name: 'Cashew (Salted)',
        image: './Products/nuts/Cashew/Cashews-Roasted-Salted-240.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts9',
        name: 'Hazelnut (Salted)',
        image: './Products/nuts/HazelNuts/Filberts-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts11',
        name: 'Peanuts Redskin (Salted)',
        image: './Products/nuts/Peanuts/Peanuts-Redskin-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts13',
        name: 'Peanuts (Salted)',
        image: './Products/nuts/Peanuts/Peanuts-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts17',
        name: 'Pistachios (Salted)',
        image: './Products/nuts/Pistachios/Roasted-Salted-Pistachios.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts18',
        name: 'Pumpkin Seeds (Salted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-In-Shell-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts20',
        name: 'Pumpkin Kernels (Salted)',
        image: './Products/nuts/Pumpkin Seeds/Pumpkin-Kernels-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'roastedProducts22',
        name: 'Sunflower Seeds (Salted)',
        image: './Products/nuts/Sunflower Seeds/Sunflower-In-Shell-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]
const DriedProducts = [
    {
        id: 'driedProducts1',
        name: 'Apple Rings',
        image: './Products/dried fruits/Dried-Apple-Rings.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts2',
        name: 'Apricots',
        image: './Products/dried fruits/Dried-Apricots-Turkish.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts3',
        name: 'Banana Chips',
        image: './Products/dried fruits/Dried-Banana-Chips.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts4',
        name: 'Blueberries',
        image: './Products/dried fruits/Dried-Blueberries.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts5',
        name: 'Cantaloupe',
        image: './Products/dried fruits/Dried-Cantaloupe.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts6',
        name: 'Cranberries',
        image: './Products/dried fruits/Dried-Cranberries.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts7',
        name: 'Dates Medjool',
        image: './Products/dried fruits/Dried-Dates-Medjool.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts8',
        name: 'Figs',
        image: './Products/dried fruits/Dried-Figs.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },{
        id: 'driedProducts9',
        name: 'Ginger',
        image: './Products/dried fruits/Dried-Ginger.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts10',
        name: 'Kiwi',
        image: './Products/dried fruits/Dried-Kiwi.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts11',
        name: 'Mango',
        image: './Products/dried fruits/Dried-Mango.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts12',
        name: 'Strawberry Slices',
        image: './Products/dried fruits/Dried-Papaya-Strawberry-Slices.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts13',
        name: 'Peaches',
        image: './Products/dried fruits/Dried-Peaches-1.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts14',
        name: 'Pears',
        image: './Products/dried fruits/Dried-Pears.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts15',
        name: 'Pineapple Rings',
        image: './Products/dried fruits/Dried-Pineapple-Rings-No-Sugar-Low-Sulphur-Nutstop.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts16',
        name: 'Prunes',
        image: './Products/dried fruits/Dried-Prunes.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },{
        id: 'driedProducts17',
        name: 'Raisins',
        image: './Products/dried fruits/Dried-Raisins-Golden-Jumbo-Nutstop.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts18',
        name: 'Red Cherries',
        image: './Products/dried fruits/Dried-Red-Sour-Cherries.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts19',
        name: 'Star Fruit',
        image: './Products/dried fruits/Dried-Star-Fruit.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts20',
        name: 'Strawberries',
        image: './Products/dried fruits/Dried-Strawberries.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts21',
        name: 'Goji Berries',
        image: './Products/dried fruits/Goji-Berries.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts22',
        name: 'Nectarines',
        image: './Products/dried fruits/Nectarines.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts23',
        name: 'Guava',
        image: './Products/dried fruits/Organic-Dried-Guava.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts24',
        name: 'Organic Jackfruit',
        image: './Products/dried fruits/Organic-Dried-Jackfruit.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'driedProducts25',
        name: 'Tomatoes',
        image: './Products/dried fruits/Sun-Dried-Tomatoes.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]
const Almonds = [
     {
        id: 'almond1',
        name: 'Almonds Blanched',
        image: './Products/nuts/Almond/Almonds-Blanched-Raw.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond2',
        name: 'Almonds Blanched (Roasted + Salted)',
        image: './Products/nuts/Almond/Almonds-Blanched-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond3',
        name: 'Almonds Blanched (Roasted)',
        image: './Products/nuts/Almond/Almonds-Blanched-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond4',
        name: 'Almonds',
        image: './Products/nuts/Almond/Almonds-In-Shell.png',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond5',
        name: 'Almonds (Roasted + Salted)',
        image: './Products/nuts/Almond/Almonds-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond6',
        name: 'Bulk Almonds',
        image: './Products/nuts/Almond/Bulk-Raw-Almonds.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'almond7',
        name: 'Almonds (Roasted)',
        image: './Products/nuts/Almond/Roasted-Almonds.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
]
const BrazilNut = [
    {
        id: 'brazilnut1',
        name: 'Brazil Nuts (Roasted + Salted)',
        image: './Products/nuts/Brazil Nut/Brazil-Nuts-Roasted-Salted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    },
    {
        id: 'brazilnut2',
        name: 'Brazil Nuts (Roasted)',
        image: './Products/nuts/Brazil Nut/Brazil-Nuts-Roasted-Unsalted.jpg',
        desc: 'Rs 250 - (250g) per pack',
        benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
        keyPoints: [
            'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
        ],
        price: 200,
    }
]
const Cashew = [
    {
       id: 'cashew1',
       name: 'Cashew Pieces',
       image: './Products/nuts/Cashew/Cashew-Pieces-Raw.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew2',
       name: 'Cashew Pieces (Roasted + Salted)',
       image: './Products/nuts/Cashew/Cashew-Pieces-Roasted-Salted.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew3',
       name: 'Cashew Pieces (Roasted)',
       image: './Products/nuts/Cashew/Cashew-Pieces-Roasted-Unsalted.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew4',
       name: 'Cashews 320',
       image: './Products/nuts/Cashew/Cashews-Raw-320.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew5',
       name: 'Cashews 240 (Roasted + Salted)',
       image: './Products/nuts/Cashew/Cashews-Roasted-Salted-240.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew6',
       name: 'Cashews 320 (Roasted + Salted)',
       image: './Products/nuts/Cashew/Cashews-Roasted-Salted-320.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
       id: 'cashew7',
       name: 'Cashews 240 (Roasted)',
       image: './Products/nuts/Cashew/Cashews-Roasted-Unsalted-240.jpg',
       desc: 'Rs 250 - (250g) per pack',
       benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
       keyPoints: [
           'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
       ],
       price: 200,
   },
   {
    id: 'cashew8',
    name: 'Cashews 320 (Roasted)',
    image: './Products/nuts/Cashew/Cashews-Roasted-Unsalted-320.jpg',
    desc: 'Rs 250 - (250g) per pack',
    benefits : 'Almonds boast an impressive nutrient profile. A 1-ounce (oz), or 28-gram (g), serving of almonds contains (1Trusted Source, 2Trusted Source):',
    keyPoints: [
        'Fiber: 3.5 g' , 'Protein: 6 g ',' Fat: 14 g (9 of which are monounsaturated) ',' Vitamin E: 48% of the daily value (DV) ', 'Manganese: 27% of the DV'
    ],
    price: 200,
}
]






// cards flipping functionality
function flipCard(event) {
    let card = event.target.closest('.card-inner');
    if (card) {
        card.classList.toggle('flipped');
    }
}


// FOR ALL PRODUCTS
let ProductContainer = document.getElementById('allProducts')
ProductContainer.innerHTML = ''

let cartIconQuantity = document.querySelector('.cart-item-indicator');

listProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        ProductContainer.appendChild(newProduct)
})

ProductContainer.addEventListener('click' , e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id)
    }
})
// FOR SPECIAL PRODUCTS

let specialProductContainer = document.getElementById('spcContainer')
specialProductContainer.innerHTML = ''

specialProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        specialProductContainer.appendChild(newProduct)
})

specialProductContainer.addEventListener('click', e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id);
    }
});



// FOR LIMITEDPRODUCTS

let limitedProductContainer = document.getElementById('limitedContainer')
limitedProductContainer.innerHTML = ''

limitedProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        limitedProductContainer.appendChild(newProduct)
})


limitedProductContainer.addEventListener('click', e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id);
    }
});

// FOR ROASTED PRODUCTS
let roastedProductContainer = document.getElementById('roastedProducts');
roastedProductContainer.innerHTML = ''

RoastedProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        roastedProductContainer.appendChild(newProduct)
})
roastedProductContainer.addEventListener('click', e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id);
    }
});

// FOR SALTED PRODUCTS

let saltedProductContainer = document.getElementById('saltedProducts');
saltedProductContainer.innerHTML = ''


SaltedProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        saltedProductContainer.appendChild(newProduct)
})
saltedProductContainer.addEventListener('click', e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id);
    }
});

// FOR DRIED PRODUCTS

let driedProductContainer = document.getElementById('driedProducts');
driedProductContainer.innerHTML = '';

DriedProducts.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('product-card')
    newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map(val => `<li>${val}</li>`).join('')}
          </ul>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `
        driedProductContainer.appendChild(newProduct)
})
driedProductContainer.addEventListener('click', e => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('addCartBtn')) {
        let pro_id = clickPosition.parentElement.dataset.id;
        addToCart(pro_id);
    }
});


// FOR CART
let cart = [];


let listItem = document.querySelector('.listCart')

function addToCart(pro_id) {
    let isAlreadyInCart = cart.findIndex((val) => val.product_id == pro_id)
    if (cart.length <= 0) {
        cart= [{
            product_id : pro_id,
            quantity : 1
        }];
    } else if (isAlreadyInCart < 0) {
        cart.push({
            product_id : pro_id,
            quantity : 1
        });
    } else {
        cart[isAlreadyInCart].quantity += 1;
    }
    addProToCart();
    savingCart()
}
// SAVING CART TO LOCAL STORAGE


    const savingCart = ()=>{
        localStorage.setItem('carts' , JSON.stringify(cart))
    }



// Adding Cart functionality
let listItemCheckout = document.querySelector('.checkout-listCart')

let totalHtml = document.querySelectorAll('.totalAmount')
const addProToCart = () => {
    listItemCheckout.innerHTML = ''
    listItem.innerHTML = ''
    let totalQuantity = 0;
    let totalAmount = 0;
    cart.forEach((cart) => {
        totalQuantity += cart.quantity;
        
        let currentProduct = listProducts.find(product => product.id === cart.product_id);

        
        if (!currentProduct) {
            currentProduct = specialProducts.find(product => product.id === cart.product_id);
        }
        
        
        if (!currentProduct) {
            currentProduct = limitedProducts.find(product => product.id === cart.product_id);
        }
        
        if (!currentProduct) {
            currentProduct = DriedProducts.find(product => product.id === cart.product_id);
        }

        
        if (!currentProduct) {
            currentProduct = SaltedProducts.find(product => product.id === cart.product_id);
        }

        
        if (!currentProduct) {
            currentProduct = RoastedProducts.find(product => product.id === cart.product_id);
        }
 
        if (currentProduct) {
            totalAmount += currentProduct.price * cart.quantity;

        let newItem = document.createElement('div');
        newItem.dataset.id = cart.product_id
        newItem.classList.add('item');
        newItem.innerHTML = `
        <div class="image">
            <img src=${currentProduct.image} alt="">
        </div>
        <div class="name">
            ${currentProduct.name}
        </div>
        <div class="price">
        $ ${currentProduct.price * cart.quantity}
        </div>
        <div class="quantity">
            <span class="minus"><</span>
            <span>${cart.quantity}</span>
            <span class="plus">></span>
        </div>
        `
        listItem.appendChild(newItem)


            let newItemCheckout = newItem.cloneNode(newItem);
            listItemCheckout.appendChild(newItemCheckout)


        }
    })
    totalHtml.forEach(elem => {
        let Amount = document.createElement('p');
        Amount.innerHTML = `Total Amount: ${totalAmount}`
        elem.innerHTML = ''
            elem.appendChild(Amount)
    })

    cartIconQuantity.innerText = totalQuantity;
}
   



// Increasing or Decreasing quantity

    listItem.addEventListener('click' , (event) => {
        let clickPosition = event.target;
        if (clickPosition.classList.contains('plus') || clickPosition.classList.contains('minus')) {
            let proId = clickPosition.parentElement.parentElement.dataset.id;
            let type = 'minus'
            if (clickPosition.classList.contains('plus')) {
                type = 'plus'
            }
            changeQuantity(proId , type)
        }
    })

    const changeQuantity = (proId , type) => {
        let positionOfTheCart = cart.findIndex( val => val.product_id == proId);

        if (positionOfTheCart >= 0) {
            switch (type) {
                case 'plus':
                    cart[positionOfTheCart].quantity = cart[positionOfTheCart].quantity + 1;
                    
                    break;
                    
                    default:
                        let changedValue = cart[positionOfTheCart].quantity - 1;
                        if (changedValue > 0) {
                            cart[positionOfTheCart].quantity = changedValue;
                        } else {
                            cart.splice(positionOfTheCart , 1)
                        }
                    break;
            }
        }
        savingCart();
        addProToCart();
    }


// Setting Product
let  initialize = ()=>{
    if (localStorage.getItem('carts')) {
        cart = JSON.parse(localStorage.getItem('carts'));
        CheckoutCart = cart;
        addProToCart()
        // addProToCheckoutCart()
    }
}
initialize();


const showCongrats = () => {
    Swal.fire({
        title : 'Order confirmed',
        icon : 'success'
    });
    contShop();
    goBack();
}

// Cart Show

let cartBtn = document.querySelector('.cartBtn');
let closeBtn = document.querySelector('.close')
let body = document.querySelector('body')

cartBtn.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeBtn.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const backBtn = document.querySelector('.payment-method .back');



// Sections
const allPro = document.getElementById('all');
const roasted = document.getElementById('roasted')
const salted = document.getElementById('salted');
const dried = document.getElementById('dried');
const shopSec = document.querySelector('.all')
const checkoutSec = document.querySelector('.checkout-sec')
// Payment Sections

const checkoutAddress = document.querySelector('.checkout');
const paymentCard = document.querySelector('.payment-method');

const goBack = () => {
    console.log('clicked');
    if (checkoutAddress.classList.contains('d-none')) {
        checkoutAddress.classList.remove('d-none')
        paymentCard.classList.add('d-none')
    }
}


backBtn.addEventListener('click' , () => goBack());


const nextfunc = () => {
    if (paymentCard.classList.contains('d-none')) {
        paymentCard.classList.remove('d-none')
        checkoutAddress.classList.add('d-none')
    }
}

const contShop = () => {
    if (shopSec.classList.contains('d-none')) {
        shopSec.classList.remove('d-none')
        checkoutSec.classList.add('d-none')
    }
}
const showCheckout = () => {
    if (checkoutSec.classList.contains('d-none')) {
        checkoutSec.classList.remove('d-none')
        shopSec.classList.add('d-none')
    }
}
const showAllPro = () => {
    allPro.classList.contains("d-none") ? allPro.classList.remove("d-none") : null;
    dried.classList.contains('d-none') ? null : dried.classList.add('d-none')
    salted.classList.contains('d-none') ? null : salted.classList.add('d-none')
    roasted.classList.contains('d-none') ? null : roasted.classList.add('d-none')
}
const showRoasted = () => {
    roasted.classList.contains("d-none") ? roasted.classList.remove("d-none") : console.log('Already removed roasted');
    allPro.classList.contains('d-none') ? null : allPro.classList.add('d-none')
    salted.classList.contains('d-none') ? null : salted.classList.add('d-none')
    dried.classList.contains('d-none') ? null : dried.classList.add('d-none')
}
const showSalted = () => {
    salted.classList.contains("d-none") ? salted.classList.remove("d-none") : console.log('Already removed salted');
    allPro.classList.contains('d-none') ? null : allPro.classList.add('d-none')
    dried.classList.contains('d-none') ? null : dried.classList.add('d-none')
    roasted.classList.contains('d-none') ? null : roasted.classList.add('d-none')
}
const showDried = () => {
    dried.classList.contains("d-none") ? dried.classList.remove("d-none") : console.log('Already removed dried');
    allPro.classList.contains('d-none') ? null : allPro.classList.add('d-none')
    salted.classList.contains('d-none') ? null : salted.classList.add('d-none')
    roasted.classList.contains('d-none') ? null : roasted.classList.add('d-none')
}




// regex patterns


const emailPattern = /[^\s]*@[a-z0-9.-]*/i ;
const nameRegex = /^[a-zA-Z\s.'-]+$/;


// validation
