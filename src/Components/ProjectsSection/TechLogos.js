
import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import tailwind from '../../img/tailwindcss-icon.svg'
import typescript from '../../img/typescriptlang-icon.svg'

export const getTechs = () => {
    return [
        { id:0, name:'HTML', image: faHtml5, color: 'text-orange-700'},
        { id:1, name:'CSS', image: faCss3, color: 'text-blue-600'},
        { id:2, name:'JavaScript', image: faJs,  color:'text-yellow-400'},
        { id:3, name:'React', image: faReact , color:'text-sky-400'},
        { id:4, name:'Tailwind CSS', image: tailwind },
        { id:5, name:'SASS', image: faSass, color:'text-pink-500'},
        { id:6, name:'TypeScript', image: typescript },
        { id:7, name:'Git', image: faGit, color:'text-orange-600'},
        { id:8, name:'Github', image: faGithub, color:'text-blue-200'}, 
        { id:9, name:'NodeJS', image: faNodeJs, color:'text-green-500'},
    ]
}