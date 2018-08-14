<template>
	<nav class="navbar display-flex" role="navigation" aria-label="main navigation">
  <div class="navbar-brand navbar-start">
    <a class="navbar-item" href="/">
      <img src="/images/tomy.png" alt="tomy" width="80" height="40">
    </a>
    <div class="navbar-menu is-active">
    <router-link to="/home" class="navbar-item">Home</router-link>
    <router-link to="/blog" class="navbar-item">Blogs</router-link>
    <router-link to="/contact" class="navbar-item">Contact</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 0.7.1
      </div>
    </div>
  </div>
</nav>
  </div>
    </div>
  <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="/signin" class="is-info button">Sign In   </router-link>
          </p>
          <p class="control">
            <router-link to="/signup" class="button is-primary">
              Sign Up
            </router-link>
          </p>
        </div>
      </div>
    </div>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

</nav>
</template>

<script>
  export default{
    name: 'header',
    methods: {

    }
  }
</script>