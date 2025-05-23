const vueApp = Vue.createApp({});

vueApp.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">PLL</a></li>
            <li class="nav-item"><a class="nav-link" href="oll.html">OLL</a></li>
            <li class="nav-item"><a class="nav-link" href="first-and-second-block.html">First & Second Block</a></li>
            <li class="nav-item"><a class="nav-link" href="cmll.html">CMLL</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
});

vueApp.mount('#vueApp');