import bakeryImage from './../../img/project2-1.png'

function idGenerator(){
    return Math.random().toString(36).slice(2)
}



export function getProjectInfo() {
    return[
    {   id: idGenerator(), 
        name:'Bakery Shop', 
        imageUrl: 'https://i.ibb.co/gF66PRy/project2-1.png', 
        githubUrl:'https://github.com/AubisDev/Bakery-Shop-Project', 
        liveUrl: 'https://agitated-einstein-2e5b59.netlify.app/'   },
    
    {   id: idGenerator(), 
        name:'Photographer website', 
        imageUrl: 'https://i.ibb.co/S3RRGDX/project1-1.png', 
        githubUrl:'https://github.com/AubisDev/protographer-presentation-website', 
        liveUrl: 'https://manuel-alegria-29a25c.netlify.app/'   }

    
    ]


}