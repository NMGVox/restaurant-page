import myimg from '../../images/espresso.jpg';
import pancake from '../../images/pancake.jpg';
import capp from '../../images/capp.PNG';
import klospecial from '../../images/klospecial.PNG';
import steakeggs from '../../images/steakeggs.PNG';
import mocha from '../../images/mocha.PNG';
import velvetbrew from '../../images/darkvelvet.PNG';
import seb from '../../images/sausbagel.PNG';
import redvelvet from '../../images/redvelvetcake.jpg';
import cookie from '../../images/sugarcookie.jpg';

let drinks = [
    {
        src: mocha,
        name: "Niko's Starry Mocha"
    },
    {
        src: velvetbrew,
        name: "Dark Velvet Brew"
    },
    {
        src: myimg,
        name: "OneShot QuickShot Espresso"
    },
    {
        src: capp,
        name: "Wahoo Cappuccino"
    }
]

let food = [
    {
        src: pancake,
        name: "Chocolate Panacakes"
    },
    {
        src: steakeggs,
        name: "Steak and Eggs"
    },
    {
        src: seb,
        name: "Sausage-Egg Bagel"
    },
]

let dessert = [
    {
        src: cookie,
        name: "Sugariest Cookie"
    },
    {
        src: redvelvet,
        name: "Red Velvet Cake"
    },
    {
        src: klospecial,
        name: "The Klonoa Special"
    },
]

export { drinks, food, dessert };