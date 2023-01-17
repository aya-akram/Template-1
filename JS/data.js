let productsDB = [
    {
        id: 1,
        title: 'headphone item',
        size: 'large',
        imageurl: 'images/th.jpg'
    },
    {
        id: 2,
        title: 'labtob item',
        size: 'small',
        imageurl: 'images/images.jpg'
    },  {
        id: 3,
        title: 'watch item',
        size: 'large',
        imageurl: 'images/watch.jpg'
    },  {
        id: 4,
        title: 'glasses item',
        size: 'large',
        imageurl: 'images/glasses.jpg'
    }
];

localStorage.setItem("products",JSON.stringify(productsDB));