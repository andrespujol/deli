<template lang="">
    <section>
    <div>
        <h1>Registrate</h1>
    </div>
        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
                ></b-form-input>
            </b-form-group>
          <b-form-group
                id="input-group-3"
                label="Password:"
                label-for="text-password"
                description="Your password must be 8-20 characters long."
            >
                <b-form-input
                type="password"
                id="text-password"
                v-model="form.password"
                placeholder="Enter password"
                required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

        </div>
    </section>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$alert('Te registraste correctamente', JSON.stringify(this.form.name));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
</style>
