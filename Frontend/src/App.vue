<template>
  <div>
    <!-- Top Simple Router Navigation -->
    <nav class="simple-nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/about">Products</router-link>
    </nav>

    <!-- Bootstrap Fixed Top Navbar -->
    <nav class="navbar bg-body-tertiary fixed-top bootstrap-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Cart Demo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Cart -->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item" v-for="item in cart" :key="item.product_id">
                <div class="card mb-3 cart-item">
                  <div class="card-body">
                    <h6 class="card-title">Name: {{ item.name }}</h6>
                    <p class="card-text mb-1">Quantity: {{ item.quantity }}</p>
                    <p class="card-text mb-1">
                      Product ID: {{ item.product_id }}
                    </p>
                    <p class="card-text mb-1">
                      Category ID: {{ item.category_id }}
                    </p>
                    <p class="card-text mb-1">Discount: {{ item.discount }}%</p>
                    <p class="card-text mb-1">Stock: {{ item.stock }}</p>
                    <img
                      v-if="item.image_url"
                      :src="item.image_url"
                      alt="Product Image"
                      class="img-fluid mb-2 product-image"
                    />
                    <p class="card-text">Price: {{ item.price }}</p>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <button class="btn btn-primary" @click="getCart(1)">
                  Refresh Cart
                </button>
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

<script>
export default {
  mounted() {
    // Fetch cart on app load
    this.$store.dispatch("getCart");
  },
  computed: {
    cart() {
      // Adjust according to your Vuex state structure
      return this.$store.state.cart || [];
    },
  },
  methods: {
    getCart(userId) {
      this.$store.dispatch("getCart", userId);
    },
  },
};
</script>

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
