import './style.css';
import './data.ts';
import './experience.ts';
console.log("Hello World!");

const data = {
    "first_name": "Sophia",
    "last_name": "Hawroln",
    "phone": "+375295232136",
    "skills": [
        "Adobe photoshop",
        "HTML",
        "CSS",
        "Git",
        "NODE",
        "JS"
    ],
    "education": [
        ["2008-2010", "RS School"],
        ["2010-2015", "ELS-company"],
    ]
}


const experience = [
    {
        "company": "MAIN",
        "city": "Tayler",
        "position": "back-end developer",
    },
    {
        "company": "HEADER",
        "city": "NY",
        "position": "front-end developer",
    }
]

document.querySelector('#my-name').innerHTML = `${data.first_name} <span class = "color-grey">${data.last_name}</span>`;
document.querySelector('#my-phone').innerHTML = `${data.phone}`;

let expData = '';
experience.forEach(el => {
    expData += `<section class = "mb-5`;
    expData += `<h4 class = "company-name mb-2">${el.company} - ${el.city}</h4>`;
    expData += `<h5>${el.position}</h5>`;
    expData += `</section>`;
});
document.querySelector('.exp-list').innerHTML = expData;


let skills = '';
data.skills.forEach(el => {
    skills += `<li>${el}</li>`;
});
document.querySelector('.contacts').innerHTML = skills;
