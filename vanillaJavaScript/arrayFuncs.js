// Sample Array of Objects to test functions on.
const maang = [
    {
        company : "Metaverse",
        ceo : "Zuck"
    },
    {
        company : "Apple",
        ceo : "Tim Cook"
    },
    {
        company : "Amazon",
        ceo : "Bezos"
    },
    {
        company : "Netflix",
        ceo : "Hastings"
    },
    {
        company : "Google",
        ceo : "Pichai"
    }
]

const bezosPichai = maang.filter((item) => {
    if(item.ceo === "Pichai" || item.ceo === "Bezos"){
        return item.company;
    }
});

// Array Destructuring.

const ["Kid", "Zack", "Cam"] = brothers;
