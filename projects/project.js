const Projects = [
  {
    name: "Bonsai-Clone(Individual Project)",
    about:
      "Bonsai is the best way to consolidate the “other” side of being in business as a freelancer or independent operator. I individually done that project using React, React-redux and Chakra UI.",
    img: "https://github.com/KManishY/hello_Bonsai_Clone/blob/master/BonsaiImage.png?raw=true",
    gitrepo: "https://github.com/KManishY/hello_Bonsai_Clone",
    tech_stack: "HTML | CSS | JAVASCRIPT | REACT | CHAKRA UI",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://imgs.search.brave.com/p1bm7bi3NtnfeZBLMJXxuRdCrcVm56KV7ueBUnWQ1FE/rs:fit:48:48:1/g:ce/aHR0cHM6Ly93d3cu/c2hhcmVpY29uLm5l/dC9kYXRhLzQ4eDQ4/LzIwMTYvMDgvMDEv/NjQwMzI0X2xvZ29f/NTEyeDUxMi5wbmc"/>`
    ],
    project_link: "https://obedient-act-7016.vercel.app/",
    project_type: "Indivisual Project",
    category: ["all", "html"]
  },

  {
    name: "NYKAA-Clone",
    about:
      "A beauty product website that provides the facility of beauty product for women. We have 5 member team who clone this website using html , CSS, bootstrap and Javascript with the duration of 4 days. In this Project I have done Landing page of this website and Login/SignUp Page.",
    img: "https://github.com/tanuk11/Nykaa_Clone/blob/main/Nykaa_image.png?raw=true",
    gitrepo: "https://github.com/tanuk11/Nykaa_Clone",
    tech_stack: "HTML | CSS | JAVASCRIPT | API's",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
    ],
    project_link: "https://tanuk11.github.io/Nykaa_Clone/",
    project_type: "Group Project",
    category: ["all", "html"]
  },
  {
    name: "Shoot Perfect",
    about:
      "Shoot Perfect is a free photo discovery platform where in you can save high-definition photos for your project .It allows users to use photos for commercial or non-commercial purposes without providing any attribution or obtaining permission.",
    img: "https://github.com/KManishY/imageWebApp/blob/master/imageProject.png?raw=true",
    gitrepo: "https://github.com/KManishY/imageWebApp",
    tech_stack: "HTML | CSS | JAVASCRIPT | API's",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
    ],
    project_link: "https://kmanishy.github.io/Shoot-Perfect/",
    project_type: "Indivisual Project",
    category: ["all", "html"]
  },
  {
    name: "Basic Calculator",
    about:
      "The 'Basic Calculator Using Plain JavaScript' is a simple web calculator that does math using only basic web technology, making it easy to understand and use.",
    img: "https://github.com/KManishY/Calculater-js/blob/master/calculater.png?raw=true",
    gitrepo: "https://github.com/KManishY/Calculater-js",

    tech_stack: " HTML | CSS | JAVASCRIPT | BOOTSTRAP",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`
    ],
    project_link: "https://kmanishy.github.io/Calculater-js/",
    project_type: "Indivisual Project",
    category: ["all", "html", "other"]
  }
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects");

all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.remove("active_tech_project");
});
mern_projects.addEventListener("click", () => {
  filterProjects("mern");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.remove("active_tech_project");
});

html_projects.addEventListener("click", () => {
  filterProjects("html");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
     
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
	  <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);

// TODO    Project images

// image_website = "https://github.com/KManishY/imageWebApp/blob/master/imageProject.png?raw=true"

// bonsai_image = "https://github.com/KManishY/hello_Bonsai_Clone/blob/master/BonsaiImage.png?raw=true"

// nykaa_image = "https://github.com/tanuk11/Nykaa_Clone/blob/main/Nykaa_image.png?raw=true"

// calculater_image = "https://github.com/KManishY/Calculater-js/blob/master/calculater.png?raw=true"
