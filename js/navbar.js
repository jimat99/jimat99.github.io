const vueNav = Vue.createApp({});

vueNav.component('vue-nav', {
  data() {
    return {
      showCfop: false,
      showRoux: false
    };
  },
  methods: {
    toggleCfop() {
      this.showCfop = !this.showCfop;
      this.showRoux = false;
    },
    toggleRoux() {
      this.showRoux = !this.showRoux;
      this.showCfop = false;
    }
  },
  template: `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="../cfop/f2l.html">Bima's Cubing</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" @click.prevent="toggleCfop">CFOP</a>
              <ul v-if="showCfop" class="dropdown-menu show">
                <li><a class="dropdown-item" href="../cfop/f2l.html">F2L</a></li>
                <li><a class="dropdown-item" href="../cfop/oll.html">OLL</a></li>
                <li><a class="dropdown-item" href="../cfop/pll.html">PLL</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" @click.prevent="toggleRoux">ROUX</a>
              <ul v-if="showRoux" class="dropdown-menu show">
                <li><a class="dropdown-item" href="../roux/first-and-second-block.html">First & Second Block</a></li>
                <li><a class="dropdown-item" href="../roux/cmll.html">CMLL</a></li>
                <li><a class="dropdown-item" href="../roux/lse.html">LSE</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
});

vueNav.mount('#vue-nav');