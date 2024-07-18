<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/experience"
            >Experience</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/education">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/languages">Languages</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationApp",
};
</script>

<style scoped>
/* Custom CSS for colorful styling */
.navbar {
  border-bottom: 2px solid #343a40; /* Bottom border color */
}

.navbar-brand {
  font-size: 1.8rem; /* Larger font size for the brand */
}

.navbar-toggler {
  border-color: #343a40; /* Border color for toggler */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='%2317a2b8' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  /* Custom background for toggler icon */
}

.navbar-nav .nav-link {
  font-weight: 600; /* Medium font weight */
}

.navbar-nav .nav-link:hover {
  opacity: 0.8; /* Hover opacity */
}
</style>
