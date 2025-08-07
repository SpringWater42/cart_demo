<template>
  <div class="about">
    {{ products }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        products_id: null,
        name: "",
        description: "",
        price: 0,
        discount: 0,
        stock: 0,
        category_id: null,
        image_url: "",
        is_new: false,
      },
    };
  },
  computed: {
    products() {
      return this.$store.state.products || [];
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
