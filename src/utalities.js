import carousel1 from '../src/pic/CAROUSEL1.jpg'
import carousel2 from '../src/pic/CAROUSEL2.jpg'
import carousel3 from '../src/pic/CAROUSEL3.jpg'
// //////////////////////////////////////////////////////////////
import gallery1 from '../src/pic/gallery1.jpg'
import gallery2 from '../src/pic/gallery2.jpg'
import gallery3 from '../src/pic/gallery3.jpg'
import gallery4 from '../src/pic/gallery4.jpg'
import gallery5 from '../src/pic/gallery5.jpg'
import gallery6 from '../src/pic/gallery6.jpg'
// ////////////////////////////////////////////////////////////////
import blog1 from '../src/pic/blog1.jpg'
import blog2 from '../src/pic/blog2.jpg'
import blog3 from '../src/pic/blog3.jpg'
import blog4 from '../src/pic/blog4.jpg'
import blog5 from '../src/pic/blog5.jpg'
// /////////////////////////////////////////////////////////////////////}
export const carouselHome = [
    { id: 1,direc:'/aboutus',btnContent:'About Us' ,icon: <i className="fa-solid fa-bell"></i>, title: 'First Slide', url:carousel1 },
    { id: 2,direc:'/gallery',btnContent:'Gallery' ,icon: <i className="fa-solid fa-cow"></i>, title: 'Second Slide', url:carousel2 },
    { id: 3,direc:'/menu',btnContent:'Our Menu' ,icon: [<i className="fa-solid fa-wine-bottle"></i>, <i className="fa-solid fa-wine-glass"></i>], title: 'Third Slide', url:carousel3}
];

export const menuBody = [
    {id:1, category:'Starters', icon:<i class="fi fi-br-bell-concierge"></i>,},
    {id:2, category:'Mains', icon:<i className="fi fi-rr-cow-alt"></i>,},
    {id:3, category:'Salads', icon:<i className="fi fi-rr-salad"></i>,},
    {id:4, category:'Wine', icon:<i className="fi fi-tr-glass-cheers"></i>},
    {id:5, category:'Breakfast', icon:<i className="fi fi-rr-mug-hot-alt"></i>},
    {id:6, category:'Desert', icon:<i className="fi fi-sr-pancakes"></i>,},
]

export const menuResturant = [
    {id:1, category:'Starters' ,type:'Mozzarella Dippers', description:'Fried mozzarella sticks, marinara sauce', price:'27$'},
    {id:2, category:'Starters' ,type:'Onion Rings', description:'Fried onion rings, smoked aioli', price:'32$'},
    {id:3, category:'Starters' ,type:'Fried Jalapeno', description:'Fried jalapeno pickles, cheddar sauce', price:'52$'},
    {id:4, category:'Starters' ,type:'Buffalo Wings', description:'Spicy chicken wings, blue cheese sauce, carrot, celery', price:'37$'},
    {id:5, category:'Starters' ,type:'Chilli Con Carne', description:'Spicy ground beef, bacon, kidney beans', price:'32$'},
    {id:6, category:'Starters' ,type:'Potato Skins', description:'Crispy potato skins; bacon & cheddar or vegetables', price:'42$'},

    {id:7, category:'Mains' ,type:'Rustys Burger', description:'Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion', price:'27$'},
    {id:8, category:'Mains' ,type:'Cajun Fish Steak', description:'Cajun spicied seabass, deep fried baby potatoes, side salad', price:'32$'},
    {id:9, category:'Mains' ,type:'Southern Fried Chicken', description:'Cajun coated chicken breast, fries and honey mustard', price:'52$'},
    {id:10, category:'Mains' ,type:'Crab Cake', description:'Breaded crab cakes, tartar sauce, apple and fennel salad', price:'37$'},
    {id:11, category:'Mains' ,type:'Baby Back Ribs', description:'Bbq glazed baby pork ribs, coleslaw, fries', price:'32$'},
    {id:12, category:'Mains' ,type:'Smokehouse Combo', description:'Smoked beef brisket, rib and sausage, coleslaw, cornbread', price:'42$'},

    {id:13, category:'Salads' ,type:'Ceaser Salad', description:'Romaine lettuce, croutons, parmigiano, Ceaser dressing.', price:'27$'},
    {id:14, category:'Salads' ,type:'Waldorf Salad', description:'Lettuce, celery, apple, grape, walnut, waldorf sauce', price:'32$'},
    {id:15, category:'Salads' ,type:'Quinoa & Avocado Salad', description:'Quinoa, avocado, mixed greens. Nuts, dried and fresh fruits', price:'52$'},
    {id:16, category:'Salads' ,type:'Grilled Salmon Salad', description:'Grilled salmon, mixed greens, capers, orange slices', price:'37$'},
    {id:17, category:'Salads' ,type:'Chicken Cobb Salad', description:'Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon', price:'32$'},
    {id:18, category:'Salads' ,type:'Salad Chicken', description:'Ceaser dressing. Optional grilled chicken breast', price:'42$'},

    {id:19, category:'Wine' ,type:'Château dYquem 2011', description:'Dessert Wine, Bordeaux, Graves, Sauternes', price:'400$'},
    {id:20, category:'Wine' ,type:'Alvear Cream NV', description:'Dessert, Fortified Wine, Andalucia', price:'32$'},
    {id:21, category:'Wine' ,type:'Chateau Dyquem 1990', description:'Dessert Wine, Bordeaux, Graves, Sauternes', price:'900$'},
    {id:22, category:'Wine' ,type:'La Grande Année 2007', description:'Rosé, Champagne', price:'400$'},
    {id:23, category:'Wine' ,type:'Sine Qua Non 2012', description:'Syrah, Shiraz & Blends, California', price:'520$'},
    {id:24, category:'Wine' ,type:'W.S. Keyes Winery 2006', description:'Merlot, California, Napa, Howell Mountain', price:'420$'},

    {id:25, category:'Breakfast' ,type:'Egg Benedict', description:'English muffin, beef, hollandaise sauce, poached egg.', price:'27$'},
    {id:26, category:'Breakfast' ,type:'Texas Benedict', description:'English muffin, short ribs, bbq sauce, poached egg.', price:'32$'},
    {id:27, category:'Breakfast' ,type:'Rustys Omlette', description:'Mozzarella, cheddar, caramelized onion, black beans.', price:'52$'},
    {id:28, category:'Breakfast' ,type:'Salmon Bagel', description:'Smoked salmon, cream cheese, dill, rocket, red onion.', price:'37$'},
    {id:29, category:'Breakfast' ,type:'Breakfast Bagel', description:'Chocolate, marshmallow, biscuit bar', price:'32$'},
    {id:30, category:'Breakfast' ,type:'Rustys Pancake', description:'Strawberry, white chocolate, dark chocolate, crispearls', price:'42$'},

    {id:31, category:'Desert' ,type:'Bourbon Pecan Pie', description:'Bourbon pecan stuffed pie, vanilla ice-cream', price:'27$'},
    {id:32, category:'Desert' ,type:'New York Cheesecake', description:'Cheesecake, strawberry & lime salad', price:'32$'},
    {id:33, category:'Desert' ,type:'Rustys ice-cream', description:'Vanilla, bourbon, cookie, chocolate ice-cream', price:'52$'},
    {id:34, category:'Desert' ,type:'Smores', description:'Chocolate chip cookies, marshmallow, chocolate', price:'37$'},
    {id:45, category:'Desert' ,type:'Rocky Road', description:'Chocolate, marshmallow, biscuit bar', price:'32$'},
    {id:36, category:'Desert' ,type:'Apple & Pear Crumble', description:'Caramelized pear and apple, oat crumble, vanilla ice-cream', price:'42$'},
]

export const galleryImages = [
    {id:1 , category:'Mains', url:gallery1},
    {id:2 , category:'Salad', url:gallery2},
    {id:3 , category:'Breakfast', url:gallery3},
    {id:4 , category:'Mains', url:gallery4},
    {id:5 , category:'Salad', url:gallery5},
    {id:6 , category:'Breakfast', url:gallery6},
]

export const blogContent = [
    { id: 1, category: ['Steak', 'Wine'], title: 'Meat And Poultry Recipes', url:blog1},
    { id: 2, category: ['Breakfast', 'Mains'], title: 'Easy Mongolian Beef Recipes', url:blog2},
    { id: 3, category: ['Mains', 'Starters'], title: '19 Types Of Red Wine Recipes', url:blog3},
    { id: 4, category: ['Breakfast', 'Starters'], title: 'Recipe For A Delicious Cake', url:blog4},
    { id: 5, category: ['Tea', 'Wine'], title: 'Easy Mongolian Beef Recipes', url:blog5},
    { id: 7, category: ['Steak', 'Wine'], title: 'Meat And Poultry Recipes', url:blog1},
    { id: 8, category: ['Breakfast', 'Mains'], title: 'Easy Mongolian Beef Recipes', url:blog2},
    { id: 9, category: ['Mains', 'Starters'], title: '19 Types Of Red Wine Recipes', url:blog3},
    { id: 10, category: ['Breakfast', 'Starters'], title: 'Recipe For A Delicious Cake', url:blog4},
    { id: 11, category: ['Tea', 'Wine'], title: 'Easy Mongolian Beef Recipes', url:blog5},
];
