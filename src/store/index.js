import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    previousRoute: "",
    isLoggedIn: false,
    products: [
      {
        id: 1,
        category: "Tools",
        description: "nice item that's all for discription",
        title: "Pencil",
        image: "https://source.unsplash.com/200x200/?pencil",
        price: { regular: "$ 100.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: true,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
        ],
      },
      {
        id: 2,
        category: "Accessorries",
        description: "nice item that's all for discription",
        title: "School bag",
        image: "https://source.unsplash.com/200x200/?schoolbag",
        price: { regular: "$ 500.00 ", special: "$ 250.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: true,
        reviews: 8,
        badgeLabel: "-50%",
        badgeColor: "color-primary",
        colors: [
          {
            label: "Green",
            value: "green",
            color: "#AAAA00",
            selected: false,
          },
          { label: "Blue", value: "blue", color: "#0099AA", selected: false },
          {
            label: "Vivid red",
            value: "vivid red",
            color: "#aa1100",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        id: 3,
        category: "Top wear",
        description: "nice item that's all for discription",
        title: "Men's t-shirt",
        image: "https://source.unsplash.com/200x200/?tshirt",
        price: { regular: "$ 300.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
        ],
      },
      {
        id: 4,
        category: "Bottom wear",
        description: "nice item that's all for discription",
        title: "Jeans",
        image: "https://source.unsplash.com/200x200/?jeans",
        price: { regular: "$ 400.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
        ],
      },
      {
        id: 5,
        category: "Tools",
        description: "nice item that's all for discription",
        title: "Bottle",
        image: "https://source.unsplash.com/200x200/?bottle",
        price: { regular: "$ 75.00 ", special: "$ 45.00" },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "-10%",
        badgeColor: "color-primary",
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        id: 6,
        category: "Electronics",
        description: "nice item that's all for discription",
        title: "Keyboard",
        image: "https://source.unsplash.com/200x200/?keyboard",
        price: { regular: "$ 350.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        id: 7,
        category: "Accessorries",
        description: "nice item that's all for discription",
        title: "Wallet",
        image: "https://source.unsplash.com/200x200/?wallet",
        price: { regular: "$ 90.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        id: 8,
        category: "Home",
        description: "nice item that's all for discription",
        title: "Cup",
        image: "https://source.unsplash.com/200x200/?cup",
        price: { regular: "$ 50.00 " },
        rating: { max: 5, score: 4 },
        isInWishlist: false,
        reviews: 8,
        badgeLabel: "",
        badgeColor: "color-primary",
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Women Bag",
        id: 9,
        category: "Accessorries",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?ladies bag",
        price: { regular: "$50.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Camera",
        id: 10,
        category: "Electronics",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?camera",
        price: { regular: "$800.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Knife",
        id: 11,
        category: "Tools",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?knife",
        price: { regular: "$120.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Headphones",
        id: 12,
        category: "Electronics",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?Headphones",
        price: { regular: "$350.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Sun glass",
        id: 13,
        category: "Accessorries",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?sunglass",
        price: { regular: "$80.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Bedsheet",
        id: 14,
        category: "Home",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?bedsheet",
        price: { regular: "$160.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Umbrella",
        id: 15,
        category: "Tools",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?umbrella",
        price: { regular: "$260.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
      {
        title: "Sweater",
        id: 16,
        category: "Top wear",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        image: "https://source.unsplash.com/200x200/?sweater",
        price: { regular: "$360.00" },
        rating: { max: 5, score: 5 },
        reviewsCount: 8,
        isInWishlist: true,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          {
            label: "Peach",
            value: "peach",
            color: "#F59F93",
            selected: false,
          },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      },
    ],
    cart: [],
    productDetail: [],
  },
  getters: {
    getIsLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    products: (state) => {
      return state.products;
    },
    productDetail: (state) => {
      return state.productDetail;
    },
    cart: (state) => {
      return state.cart;
    },
    previousRoute: (state) => {
      return state.previousRoute;
    },
  },
  mutations: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    addToCart(state, payload) {
      console.log(payload)
      let cartData = {
        title: payload.name ? payload.name : payload.title,
        id: "",
        image: payload.image ? payload.image : payload.images[0].desktop.url,
        price: payload.price.regular
          ? payload.price
          : { regular: payload.price },
        configuration: [
          { name: "Size", value: "XS" },
          { name: "Color", value: "White" },
        ],
        qty: payload.qty,
      };
      state.cart.push(cartData);
    },
    removeFromCart(state, payload) {
      state.cart.splice(payload, 1);
    },
    productDetail(state, payload) {
      state.productDetail = [];
      state.productDetail = payload;
    },
    updatePreviousRoute(state, payload) {
      state.previousRoute = payload;
    },
  },
  actions: {
    Login(context) {
      context.commit("login");
    },
    Logout(context) {
      context.commit("logout");
    },
    AddToCart(context, payload) {
      context.commit("addToCart", payload);
    },
    RemoveFromCart(context, payload) {
      context.commit("removeFromCart", payload);
    },
    ProductDetail(context, payload) {
      context.commit("productDetail", payload);
    },
    UpdatePreviousRoute(context, payload) {
      context.commit("updatePreviousRoute", payload);
    },
  },
  modules: {},
});
