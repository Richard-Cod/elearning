var categories = [
    {
        name : "premier",
        description : "La description de la categorie",
        nb_courses : "55",
    },
    {
        name : "deuxieme",
        description : "La description de la categorie",
        nb_courses : "55",
    },
    {
        name : "troisieme",
        description : "La description de la categorie",
        nb_courses : "55",
    },
    {
        name : "quatrieme",
        description : "La description de la categorie",
        nb_courses : "55",
    },
    {
        name : "cinquieme",
        description : "La description de la categorie",
        nb_courses : "55",
    }
]

var courses =  [
{
    name : "Apprendre Python avec Richard",
    description : "Ce cours a été créé afin de vous donner tous les fondamentaux néccéssaire afin de vous donner des bases solides en Python !",
    price : 1500,
    author : {firstName:"Richard",lastName:"Bathiebo",profession: "Developpeur Web & Mobile",profile:"https://media-exp1.licdn.com/dms/image/C5603AQGV5ReQv4oLtg/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=zA0jB2MtdUAFTTZrxOgjoWZpzAByMLh4KTRYueYLuZc"},
    nb_students : 3,
    image : "https://www.fossmint.com/wp-content/uploads/2020/03/Udemy-Advance-Python-Learning-Courses.png",
    categorie: categories[0],
    parts : [
        {
            name : "Les variables python ",
            poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            url : "https://youtu.be/nbecRjzVzNg"
        },
        {
            name : "Les conditions python ",
            poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            url : "https://youtu.be/T_AsJ0nIeh0"
        }
    ]
},
{
name : "Apprendre React",
description : "L'un des  framework Frontend javaScript les plus utilisés ",
price : 5000,
author : {firstName:"Richard",lastName:"Bathiebo",profession: "Developpeur Web & Mobile",profile:"https://media-exp1.licdn.com/dms/image/C5603AQGV5ReQv4oLtg/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=zA0jB2MtdUAFTTZrxOgjoWZpzAByMLh4KTRYueYLuZc"},
nb_students : 5118,
image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
categorie: categories[1],
parts : [
    {
        name : "La Create React App (CRA)",
        poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        url : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        name : "Les components ",
        poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        url : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        name : "Les props ",
        poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        url : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
]
},
{
name : "cours 3",
description : "description 3",
price : 3000,
author : {firstName:"Richard",lastName:"Bathiebo",profession: "Developpeur Web & Mobile",profile:"https://media-exp1.licdn.com/dms/image/C5603AQGV5ReQv4oLtg/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=zA0jB2MtdUAFTTZrxOgjoWZpzAByMLh4KTRYueYLuZc"},
nb_students : 568,
image : "https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
categorie: categories[2],
},
{
name : "cours 4",
description : "description 4",
price : 3000,
author : {firstName:"Richard",lastName:"Bathiebo",profession: "Developpeur Web & Mobile",profile:"https://media-exp1.licdn.com/dms/image/C5603AQGV5ReQv4oLtg/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=zA0jB2MtdUAFTTZrxOgjoWZpzAByMLh4KTRYueYLuZc"},
nb_students : 568,
image : "https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
categorie: categories[3],
},
{
name : "cours 5",
description : "description 5",
price : 3000,
author : {firstName:"Richard",lastName:"Bathiebo",profession: "Developpeur Web & Mobile",profile:"https://media-exp1.licdn.com/dms/image/C5603AQGV5ReQv4oLtg/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=zA0jB2MtdUAFTTZrxOgjoWZpzAByMLh4KTRYueYLuZc"},
nb_students : 568,
image : "https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
categorie: categories[4],
}
];

export {categories,courses} ;