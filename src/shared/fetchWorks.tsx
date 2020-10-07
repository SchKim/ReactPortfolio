// import { baseUrl } from "./baseUrl";
import { IWorks } from "./IWork";


// export function fetchWorks() : Promise<IWorks[]> {
//     return fetch(baseUrl + " works")
//     .then(response => {
//         console.log(response)
//         console.log(response.json())
//         return response.json()

//     })
//     .then(works => {
//         console.log(works)
//         return works;
//     });
// }


export function fetchWorks(): IWorks[] {
     const works = [
        {
            id: 0,
            title: "Kika",
            image: "assets/work_logo/kika.jpg",
            text: "Voor het KiKa project vervult Kim een dubbelrol ze is zowel Front-End Developer als Scrum Master. Met dit team is ze verantwoordelijk voor het maken van een applicatie, met als doe kinderen met kanker in het prinses Maxima Centrum dichter bij elkaar te brengen. Dit doen we door middel van LiveStream, beschermde chat functionaliteit, evenementenkalender, games met Nomi de spin in de hoofdrol. Deze applicatie is volledig responsive en kindvriendelijk ontwikkeld, met de MEAN stack (MongoDB / ExpressJS / Angular 7 / NodeJS ). Hierbij wordt ook gebruik gemaakt van HTML, CSS, TypeScript, REST / JSON API. Dankzij de inzet van Kim is dit ambitieuze project in korte tijd gerealiseerd en is het een referentieproject waarmee de klant naar buiten treedt en zich als een innovatieve organisatie kan profileren. Als Scrum Master wist zij het team gefocust te houden en in korte sprints de applicatie conform klantwensen te ontwikkelen, waarbij zij tevens ontwikkelwerkaan de app heeft gedaan."
        },
        {
            id: 1,
            title: "Rabobank",
            image: "assets/work_logo/rabobank.png",
            text: "Kim was Front-End Developer in het Scrum-team bij de Rabobank. Team NL staat primair opgesteld voor de bouw van frontend features ten behoeve van de marketingcampagnes van de Rabobank zoals: Strakshebjehetnodig, Passi, Grow en Gezinsuitbreiding. Daarnaast is TeamNL verantwoordelijk voor de migratie van"
        },
        {
            id: 2,
            title: "Volksbank",
            image: "assets/work_logo/De-Volksbank.png",
            text:   "De Volksbank is de overkoepelende organisatie van de SNSbank, ASNbank, Regiobank en BLG wonen. De producten die Volksbank levert zijn Multiplatform ontwikkeld en zijn in verschillende frameworks gebouwd, zoals AngularJS en Angular 5. Als Front-End Developer zat Kim in het Scrum-team bij de Volksbank. Dit team was verantwoordelijk voor de applicatie Zakelijk. Deze applicatie moest responsive worden en aan de eisen van Stichting Drempelvrij voldoen. Daarnaast wenst de Volksbank dat alles wat ontwikkeld is door de developer, ook door de developer getest wordt. Kim heeft dit gedaan in Protractor/Cucumber en Unit tests. Ook heeft Kim andere applicaties onderhouden die door het team waren ontwikkeld. Hierbij moest zij op basis van beperkte aanwijzingen en begeleiding haar weg vinden in de systemen van De Volksbank. Dankzij haar open communicatie en soepele samenwerking met het ontwikkelteam en de gebruikersorganisatie, is dat Kim goed afgegaan."
        },
        {   
            id: 3,
            title: "Code Clear",
            image:"assets/work_logo/cc.jpg",
            text:" In haar functie als Front-End developer bij Code Clear bestonden haar werkzaamheden uit  het maken en het ontwikkelen van designs, het responsive maken van websites en responsive e-mails. Hiervoor gebruikte Kim de talen: HTML, CSS, javascript en jQuery. Bij Code Clear loste Kim complexe visuele problemen op. Ze maakte ontwerpen die passen bij de huisstijl, look-and-feel en het doel van het project. Denk hierbij aan: wire-frames, flows, (web)designs en UX-design. Bij het development zorgde Kim ervoor dat het ontwerp en de functionaliteit samenkomen bij de ontwikkeling. Hierin maakte ze functies gebruiksvriendelijk en beheersbaar voor de klant. Denk hierbij aan: WordPress-websites, standalone campagnes, Tumblr templates, frontend en backend development. In deze kleine organisatie heeft Kim kennis gemaakt met alle aspecten van Front-End Development en communicatie met gebruikers/klanten. Cross-disciplinair denken en werken was een cruciale vaardigheid en Kim heeft laten zien zich daarbij als een vis in het water te voelen. Klanten en collega’s spraken hun waardering uit voor haar gedrevenheid en werkwijze, waarbij zij bewaakte dat gezamenlijk het beoogde resultaat werd bereikt."
        }
    ]
     return works;
}