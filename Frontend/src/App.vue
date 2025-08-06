<template>
  <div>
    <!-- Top Simple Router Navigation -->
    <nav class="simple-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <!-- Bootstrap Fixed Top Navbar -->
    <nav class="navbar bg-body-tertiary fixed-top bootstrap-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Cart Demo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main App View -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>



<style>
/* General App Style */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 80px; /* Adjust for fixed top navbar */
}

/* Top simple nav */
.simple-nav {
  background-color: #f5f5f5;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 10px;
  position: relative;
  z-index: 1031;
}

.simple-nav a {
  font-weight: bold;
  margin: 0 10px;
  color: #2c3e50;
  text-decoration: none;
}

.simple-nav a.router-link-exact-active {
  color: #42b983;
}

/* Adjust main content if fixed top navbar exists */
.main-content {
  margin-top: 60px;
}

/* Bootstrap navbar override if needed */
.bootstrap-nav {
  z-index: 1040; /* Above simple nav */
}
</style>
