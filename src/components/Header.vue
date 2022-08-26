<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
        <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/"><img src="../assets/images/logo-png-pag.png"></g-link>
        <g-link class="logo-home logo–mobile" to="/"><img class="logo-image" alt="logo" src="../assets/images/icono-webpage.png"></g-link>
      </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <h4>
                <a href="https://instagram.com/trucksrepair" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>

                <a href="https://trucksrepair.cl" target="_blank" class="ml-2">
                    <i class="bi bi-globe2"></i>
                </a>                
          </h4>
        </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

#wsp {
  color: green;
  font-size: 30px;
}

a, span {
  color: white !important; 
}

.navbar-toggler-icon {
  color: white !important;   
}

#href:hover {
  color: #cf012a !important;  
}

a:hover {
  text-decoration: none !important;
}

nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: white !important;
  font-family: 'Roboto', sans-serif;
  background-color: #121212;    
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.redes {
  display: flex;
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
