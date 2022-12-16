<template>
  <div>
    <main class="mt-5 pt-4">
      <div class="container wow fadeIn">
        <h2 class="my-5 h2 text-center">Checkout form</h2>

        <div class="row">
          <div class="col-md-8 mb-4">
            <div class="card">
              <form class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="md-form">
                      <input type="text" id="firstName" class="form-control" />
                      <label for="firstName" class="">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="md-form">
                      <input type="text" id="lastName" class="form-control" />
                      <label for="lastName" class="">Last name</label>
                    </div>
                  </div>
                </div>
                <div class="md-form input-group pl-0 mb-5">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control py-0"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="md-form mb-5">
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="youremail@example.com"
                  />
                  <label for="email" class="">Email (optional)</label>
                </div>
                <div class="md-form mb-5">
                  <input
                    type="text"
                    id="address"
                    class="form-control"
                    placeholder="1234 Main St"
                  />
                  <label for="address" class="">Address</label>
                </div>
                <div class="md-form mb-5">
                  <input
                    type="text"
                    id="address-2"
                    class="form-control"
                    placeholder="Apartment or suite"
                  />
                  <label for="address-2" class="">Address 2 (optional)</label>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-12 mb-4">
                    <label for="country">Country</label>
                    <select
                      class="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr />
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="same-address"
                  />
                  <label class="custom-control-label" for="same-address"
                    >Shipping address is the same as my billing address</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="save-info"
                  />
                  <label class="custom-control-label" for="save-info"
                    >Save this information for next time</label
                  >
                </div>

                <hr />

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      checked
                      required
                    />
                    <label class="custom-control-label" for="credit"
                      >Credit card</label
                    >
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="debit"
                      >Debit card</label
                    >
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="paypal"
                      >Paypal</label
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted"
                      >Full name as displayed on card</small
                    >
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <div v-for="products in product" :key="products">
              <ul class="list-group mb-3 z-depth-1">
                <li
                  class="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 class="my-0">{{ products.title }}</h6>
                  </div>
                  <span class="text-muted">X{{ products.qty }}</span>
                </li>
              </ul>
            </div>
            <hr />
            <p>
              Total
              <span class="price" style="color: black"
                ><b>${{ totalPrice }}</b></span
              >
            </p>
            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-secondary btn-md waves-effect m-0"
                    type="button"
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer class="page-footer text-center font-small mt-4 wow fadeIn">
      <div class="pt-4">
        <a
          class="btn btn-outline-white"
          href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
          target="_blank"
          role="button"
          >Download MDB
          <i class="fas fa-download ml-2"></i>
        </a>
        <a
          class="btn btn-outline-white"
          href="https://mdbootstrap.com/education/bootstrap/"
          target="_blank"
          role="button"
          >Start free tutorial
          <i class="fas fa-graduation-cap ml-2"></i>
        </a>
      </div>
      <hr class="my-4" />
      <div class="pb-4">
        <a href="https://www.facebook.com/mdbootstrap" target="_blank">
          <i class="fab fa-facebook-f mr-3"></i>
        </a>

        <a href="https://twitter.com/MDBootstrap" target="_blank">
          <i class="fab fa-twitter mr-3"></i>
        </a>

        <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
          <i class="fab fa-youtube mr-3"></i>
        </a>

        <a
          href="https://plus.google.com/u/0/b/107863090883699620484"
          target="_blank"
        >
          <i class="fab fa-google-plus-g mr-3"></i>
        </a>

        <a href="https://dribbble.com/mdbootstrap" target="_blank">
          <i class="fab fa-dribbble mr-3"></i>
        </a>

        <a href="https://pinterest.com/mdbootstrap" target="_blank">
          <i class="fab fa-pinterest mr-3"></i>
        </a>

        <a
          href="https://github.com/mdbootstrap/bootstrap-material-design"
          target="_blank"
        >
          <i class="fab fa-github mr-3"></i>
        </a>

        <a href="http://codepen.io/mdbootstrap/" target="_blank">
          <i class="fab fa-codepen mr-3"></i>
        </a>
      </div>
      <div class="footer-copyright py-3">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
import store from "../store/index";

export default {
  name: "Checkout",
  data() {
    return {
      product: store.getters.cart,
    };
  },
  computed: {
    totalPrice() {
      return this.product
        .reduce((totalPrice, product) => {
          const price = product.price.special
            ? product.price.special.replace("$", "")
            : product.price.regular.replace("$", "");
          const summary = parseFloat(price).toFixed(2) * product.qty;
          return totalPrice + summary;
        }, 0)
        .toFixed(2);
    },
  },
};
</script>
