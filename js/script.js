/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Software Developer...","Web Developer...",],
    typeSpeed:70,
    BackSpeed:60,
    loop:true
})

var typedName = new Typed(".name",{
    strings:["","Manish Kumar ","",],
    typeSpeed:200,
    BackSpeed:30,
    loop:true
})

/* ============================== Navigation ============================ */
document.addEventListener('DOMContentLoaded', function() {
  // Get navigation elements
  const nav = document.querySelector(".nav");
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;
  
  // Only run navigation code if nav exists
  if (nav) {
    const navList = nav.querySelectorAll("li");
    const totalNavList = navList.length;
    
    for(let i=0; i<totalNavList; i++) {
      const a = navList[i].querySelector("a");
      if (a) {
        a.addEventListener("click", function() {
          removeBackSection();
          for(let j=0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
              addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
          showSection(this);
          if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
          }
        })
      }
    }
  }
  
  // Removed hire-me button functionality
});

function removeBackSection() {
  const allSection = document.querySelectorAll(".section");
  for(let i=0; i<allSection.length; i++) {
    allSection[i].classList.remove("back-section");
  }   
}

function addBackSection(num) {
  const allSection = document.querySelectorAll(".section");
  if (allSection[num]) {
    allSection[num].classList.add("back-section");
  }
}

function showSection(element) {
  const allSection = document.querySelectorAll(".section");
  for(let i=0; i<allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  const targetSection = document.querySelector("#" + target);
  if (targetSection) {
    targetSection.classList.add("active")
  }
}

function updateNav(element) {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  
  const navList = nav.querySelectorAll("li");
  for(let i=0; i<navList.length; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Skills Filter
document.querySelectorAll('.skill_filter_btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.skill_filter_btn').forEach(b => {
      b.classList.remove('active');
    });
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.textContent.toLowerCase();
    if (filterValue === 'all') {
      displaySkills(skills);
    } else if (filterValue === 'frontend') {
      const frontendSkills = skills.filter(skill => 
        skill.name.toLowerCase().includes('html') || 
        skill.name.toLowerCase().includes('css') || 
        skill.name.toLowerCase().includes('javascript') || 
        skill.name.toLowerCase().includes('react') || 
        skill.name.toLowerCase().includes('bootstrap') ||
        skill.name.toLowerCase().includes('ui')
      );
      displaySkills(frontendSkills);
    } else if (filterValue === 'backend') {
      const backendSkills = skills.filter(skill => 
        skill.name.toLowerCase().includes('node') || 
        skill.name.toLowerCase().includes('express') || 
        skill.name.toLowerCase().includes('mongodb') || 
        skill.name.toLowerCase().includes('mysql') ||
        skill.name.toLowerCase().includes('aws') ||
        skill.name.toLowerCase().includes('maven')
      );
      displaySkills(backendSkills);
    }
  });
});

// Projects Filter
document.querySelectorAll('.project_filter_btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.project_filter_btn').forEach(b => {
      b.classList.remove('active');
    });
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.textContent.toLowerCase();
    if (filterValue === 'all') {
      displayProjectData(projects);
    } else if (filterValue === 'backend') {
      const backendProjects = projects.filter(project => 
        project.tech_stack.toLowerCase().includes('node') || 
        project.tech_stack.toLowerCase().includes('express') || 
        project.tech_stack.toLowerCase().includes('mongodb') || 
        project.tech_stack.toLowerCase().includes('mysql')
      );
      displayProjectData(backendProjects);
    } else if (filterValue === 'frontend') {
      const frontendProjects = projects.filter(project => 
        project.tech_stack.toLowerCase().includes('html') || 
        project.tech_stack.toLowerCase().includes('css') || 
        project.tech_stack.toLowerCase().includes('javascript') || 
        project.tech_stack.toLowerCase().includes('react')
      );
      displayProjectData(frontendProjects);
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
 