import tourImage1 from '/assets/images/tour-1.jpeg';
import tourImage2 from '/assets/images/tour-2.jpeg';
import tourImage3 from '/assets/images/tour-3.jpeg';
import tourImage4 from '/assets/images/tour-4.jpeg';
import tourImage5 from '/assets/images/tour-5.jpeg';
import tourImage6 from '/assets/images/tour-6.jpeg';

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
    { id: 5, href: "#contact", text: "contact" }
];

export const socialLinks = [
    { id: 1, url: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, url: 'https://www.squarespace.com', icon: 'fab fa-squarespace' }
];

export const pageServices = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money' },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking' },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort' }
];

export const pageCards = [
    {
        id: 1,
        image: tourImage1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        location: 'china',
        duration: 6,
        cost: 2100
    },
    {
        id: 2,
        image: tourImage2,
        date: 'october 1th, 2020',
        title: 'best of java',
        location: 'indonesia',
        duration: 11,
        cost: 1400
    },
    {
        id: 3,
        image: tourImage3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        location: 'hong kong',
        duration: 8,
        cost: 5000
    },
    {
        id: 4,
        image: tourImage4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        location: 'kenya',
        duration: 6,
        cost: 2100
    },
    {
        id: 5,
        image: tourImage5,
        date: 'October 5th, 2020',
        title: 'Rain of Amazon',
        location: 'Brazil',
        duration: 8,
        cost: 2700
    },
    {
        id: 6,
        image: tourImage6,
        date: 'august 26th, 2020',
        title: 'Iconic Taj Mahal',
        location: 'India',
        duration: 6,
        cost: 1500
    }
];