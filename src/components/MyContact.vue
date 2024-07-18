<template>
  <div class="container">
    <h1>Contact Me</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="formData.firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="formData.lastName"
          required
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phoneNumber"
          v-model="formData.phoneNumber"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyContact",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here, e.g., send data to server
      console.log(this.formData);
      // Reset form fields after submission
      this.formData = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}
</style>
