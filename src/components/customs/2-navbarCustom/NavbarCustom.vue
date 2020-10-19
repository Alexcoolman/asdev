<template>
  <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-custom mx-4 mb-4">

    <b-navbar-brand href="#">
      <img src="../../../assets/AS_Logo_dirisi.png" width="75" height="75" title="AS Logo"
        class="d-inline-block align-top logo" alt="logo" loading="lazy">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="custom-toggler"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="justify-content-end">
      <b-navbar-nav>
        <b-nav-item
          href="#"
          v-scroll-to="{ element: '#tools', duration: 500 }">Outils
        </b-nav-item>
        <b-nav-item
          href="#"
          v-scroll-to="{ element: '#projects', duration: 800 }">Projets
        </b-nav-item>
        <b-nav-item
          href="#"
          v-scroll-to="{ element: '#contact', duration: 1000 }">Contact
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbarCustom',
};
</script>

<style lang="scss">
.navbar-custom {
  background-color: $black;
  border-left: 1px solid $green;
  border-right: 1px solid $green;
  border-bottom: 1px solid $green;
  -webkit-filter: drop-shadow($green-shadow);
  filter: drop-shadow($green-shadow);
  border-radius:  0 0 15px 15px;
}
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: rgba(0,255,0,.8);
}
.navbar-custom .navbar-nav .nav-link {
  color: $green-50 !important;
}
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:hover .nav-link {
  color: $green;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,255,0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
 .custom-toggler .navbar-toggler-icon:hover,
 .custom-toggler .navbar-toggler-icon:focus,
 .custom-toggler .navbar-toggler-icon:active {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,255,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: $green;
}
</style>
