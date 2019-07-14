class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  // Display profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Ver Perfil</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Repositorios Públicos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Seguidores: ${user.followers}</span>
            <span class="badge badge-info">Siguiendo: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Compañia: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Ubicación: ${user.location}</li>
              <li class="list-group-item">Miembre desde: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Ultimos Repositorios</h3>
      <div id="repos"></div>
    `;
  }

  // Show alert message
  showAlert(message, className) {
    //Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

}