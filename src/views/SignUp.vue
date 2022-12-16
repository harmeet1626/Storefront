<template>
  <div>
    <section class="text-center">
      <div
        class="p-5 bg-image"
        style="
          background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
          height: 300px;
        "
      ></div>
      <div
        class="card mx-4 mx-md-5 shadow-5-strong"
        style="
          margin-top: -100px;
          background: hsla(0, 0%, 100%, 0.8);
          backdrop-filter: blur(30px);
        "
      >
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">Sign up now</h2>
              <form @submit.prevent>
                <div class="row">
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="firstName"
                    type="username"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3">Firstname</label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="lastName"
                    type="username"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3">Lastname</label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="username"
                    type="username"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3">Username</label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="email"
                    type="email"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3"
                    >Email address</label
                  >
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="password"
                    type="password"
                    id="form3Example4"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                    checked
                  />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  @click="signup()"
                  class="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Parse from "parse";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async signup() {
      try {
        await Parse.Cloud.run("SignUp", {
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          password: this.password,
          username: this.username,
        }).then((res) => console.log(res));
        this.$router.push("login");
        this.$toast.open({
          message: "Signed Up!",
          position: "top",
        });
      } catch {
        this.$toast.open({
          message: "Error occured!",
          type: "error",
          position: "top",
        });
      }
    },
  },
};
</script>
