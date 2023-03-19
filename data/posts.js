import { USERS } from "./users";
export const POSTS = [
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts. 😀 💻 This is going to be fun time #reactjs',
        profilePicture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow! This build looks fire. Super excited about' 
            },
            {
                user: 'amaanath.dev',
                comment: "Once I wake up, I'll finally be ready to code"
            },
        ]
    },
    {
        imageUrl: 'https://i.ibb.co/02vj5cw/Post-Copy.png',
        user: USERS[1].user,
        likes: 3500,
        caption: 'Train Ride to Hogwarts. 😀 💻 ',
        profilePicture: USERS[1].image,
        comments: [
            {
                user: 'cleverqazi',
                comment: 'Yo' 
            },
            {
                user: 'amaanath.dev',
                comment: "i am sleeping"
            },
        ]
    }
]