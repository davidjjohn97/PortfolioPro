import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonials/Testimonials";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

export const totalScreens = [
    {
        screen_name:"Home",
        component: Home

    },
    {
        screen_name:"AboutMe",
        component: AboutMe

    },
    {
        screen_name:"Resume",
        component: Resume

    },
    {
        screen_name:"Testimonial",
        component: Testimonial

    },
    {
        screen_name:"ContactMe",
        component: ContactMe

    }
]

export const getScreenIndex = (screen_name) =>{
    if (!screen_name) return -1;
    for(let i =0; i<totalScreens.length;i++){
        if(totalScreens[i].screen_name === screen_name) return i;
    }
    return -1;
}