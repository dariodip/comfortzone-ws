import type { Member } from "../types";

type MemberMap = Record<string, Member>;

export const members: MemberMap = {
    "dario": { 
        name: "Dario Di Pasquale",
        title: "Software Engineer",
        image: "https://avatars.githubusercontent.com/u/9026586?v=4",
        email: "dario@dariodip.com",
        phone: "+393899528723",
        website: "https://dariodip.com",
        instagram: "https://www.instagram.com/dariodip9",
        linkedin: "https://www.linkedin.com/in/dario-di-pasquale/",
    },
    "manu": {
        name: "Manuela Scarpinati",
        title: "Founder & Owner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZLqnmGIAQmoYrj-NCRJUDOW8I32fI5wufrEV8XodJzTEu8SPMs5U2WkE&s=10",
        email: "comfortzone.coworking@gmail.com",
        phone: "+393920345773",
        instagram: "https://www.instagram.com/comfortzone_coworking/",
        facebook: "https://www.facebook.com/comfortzonebattipaglia/",
        linkedin: "https://www.linkedin.com/in/manuela-scarpinati-29650b11a/"
    }
}