import beefBurger from '../assets/beef-burger.jpg'
import chickenWrap from '../assets/chicken-wrap.jpg'
import veggiePizza from '../assets/veggie-pizza.jpg'
import gardenSalad from '../assets/garden-salad.jpg'
import fruitBowl from '../assets/fruit-bowl.jpg'
import chickenPizza from '../assets/chicken-pizza.jpeg'

const meals = [
    { name: "Beef Burger", image:beefBurger, price: 850, category: "Fast Food", vegetarian: false },
    { name: "Veggie Pizza", image:veggiePizza, price: 1200, category: "Pizza", vegetarian: true },
    { name: "Chicken Wrap", image:chickenWrap, price: 650, category: "Fast Food", vegetarian: false },
    { name: "Garden Salad", image:gardenSalad, price: 500, category: "Healthy", vegetarian: true },
    { name: "Chicken Pizza", image:chickenPizza, price: 1400, category: "Pizza", vegetarian: false },
    { name: "Fruit Bowl", image:fruitBowl, price: 450, category: "Healthy", vegetarian: true }
    ];

export default meals