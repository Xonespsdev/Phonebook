<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/tomy.png" alt="tomy" width="80" height="40">
    </a>
    <div class="navbar-menu is-active">
    <router-link to="/home" class="navbar-item">Home</router-link>
    <router-link to="/blog" class="navbar-item">Blogs</router-link>
    <router-link to="/contact" class="navbar-item">Contact</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>
  </div>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
</template>