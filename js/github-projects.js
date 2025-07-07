// GitHub Projects Integration - Selective Projects
class GitHubProjects {
  constructor(username, selectedProjects = []) {
    this.username = username;
    this.selectedProjects = selectedProjects; // Array of project names to show
    this.apiUrl = `https://api.github.com/users/${username}/repos`;
    this.projectsContainer = document.getElementById('projects--container');
  }

  async fetchProjects() {
    if (!this.projectsContainer) {
      console.error('Projects container not found');
      return;
    }

    // Show loading state
    this.showLoading();

    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const repos = await response.json();
      
      // Filter for selected projects only
      let filteredRepos;
      if (this.selectedProjects.length > 0) {
        // Show only selected projects
        filteredRepos = repos.filter(repo => 
          this.selectedProjects.includes(repo.name) && !repo.private
        );
      } else {
        // Fallback: show recent non-forked projects
        filteredRepos = repos
          .filter(repo => !repo.fork && !repo.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
      }
      
      if (filteredRepos.length === 0) {
        this.showNoProjects();
        return;
      }
      
      this.displayProjects(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      this.showError();
    }
  }

  showLoading() {
    this.projectsContainer.innerHTML = `
      <div class="col-12">
        <div class="github-loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p class="mt-3">Loading selected projects...</p>
        </div>
      </div>
    `;
  }

  showNoProjects() {
    this.projectsContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info text-center">
          <i class="fas fa-info-circle me-2"></i>
          No selected projects found. Please check your project names or GitHub profile.
        </div>
      </div>
    `;
  }

  displayProjects(repos) {
    this.projectsContainer.innerHTML = repos.map(repo => `
      <div class="col-lg-6 col-md-6 mb-4">
        <div class="card project-card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h5 class="card-title">${this.escapeHtml(repo.name)}</h5>
              <div class="github-stats">
                <span class="badge bg-primary me-1" title="Stars">
                  <i class="fas fa-star"></i> ${repo.stargazers_count}
                </span>
                <span class="badge bg-success" title="Forks">
                  <i class="fas fa-code-branch"></i> ${repo.forks_count}
                </span>
              </div>
            </div>
            
            <p class="card-text text-muted">
              ${this.escapeHtml(repo.description || 'No description available')}
            </p>
            
            <div class="mb-3">
              <small class="text-muted">
                <i class="far fa-calendar-alt me-1"></i>
                Updated: ${new Date(repo.updated_at).toLocaleDateString()}
              </small>
            </div>
            
            <div class="mb-3">
              ${repo.language ? `
                <span class="badge bg-info me-1">${this.escapeHtml(repo.language)}</span>
              ` : ''}
              ${repo.topics ? repo.topics.slice(0, 3).map(topic => 
                `<span class="badge bg-secondary me-1">${this.escapeHtml(topic)}</span>`
              ).join('') : ''}
            </div>
            
            <div class="d-flex justify-content-between">
              <a href="${repo.html_url}" target="_blank" class="btn btn-outline-dark btn-sm" data-toggle="tooltip" title="View Repository">
                <i class="fab fa-github"></i> Code
              </a>
              ${repo.homepage ? `
                <a href="${repo.homepage}" target="_blank" class="btn btn-primary btn-sm" data-toggle="tooltip" title="Live Demo">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  showError() {
    this.projectsContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning text-center">
          <i class="fas fa-exclamation-triangle me-2"></i>
          Unable to load selected projects. Please check your internet connection or try again later.
          <br>
          <small>Error: Could not fetch from GitHub API</small>
        </div>
      </div>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize GitHub Projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Define your selected projects here
  const selectedProjects = [
    // Add your project names here (exact repository names from GitHub)
    // Example:
    'portfolio',
    'Gmail-clone-MERN',
    'Apna_Ecommerce',
    'Shoot-Perfect',
    'Naukri-Clone',
    'MovieApp',

  ];
  
  // Replace 'KManishY' with your actual GitHub username
  const githubProjects = new GitHubProjects('KManishY', selectedProjects);
  githubProjects.fetchProjects();
}); 