<template>
    <div class="fcc m-0">
      <form :state="formState" @submit.prevent="checkForm">
        <validate :custom="{validator:emailValidator}">
          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="inputEmail"
            description="Nunca compartiremos esta información."
          >
          <b-form-input
            id="inputEmail"
            v-model="email"
            type="text"
            placeholder="Ingresar email"
            required
            ></b-form-input>
          </b-form-group>
        </validate>
        <validate >
          <b-form-group
            id="inputName"
            label="Nombre"
            label-for="input-2"
          >
          <b-form-input
            id="inputName"
            v-model="name"
            type="text"
            placeholder="Nombre completo"
            required
            ></b-form-input>
          </b-form-group>
        </validate>
              <validate  :custom="{validator:passwordValidator}">
          <b-form-group
            id="inputpassword"
            label="Password:"
            label-for="text-password"
            description="Tu contraseña debe tener al menos 8 caracteres."
          >
          <b-form-input
            type="password"
            id="inputpassword"
            v-model="password"
            placeholder="Ingresar contraseña"
            required
          ></b-form-input>
          </b-form-group>
        </validate>
        <b-button type="submit" variant="primary">Submit</b-button>
      </form>
      <div>
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th>Nombre</b-th>
              <b-th>Email</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>{{ name }}</b-td>
              <b-td>{{ email }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm',
    components: {},
    data() {
        return {
            errors: [],
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        onSubmit() {
            if (this.formState.$invalid) {
                this.$alert('Tenés que completar todos los datos');
                return;
            }
            this.$alert('Te registraste correctamente', JSON.stringify(this.name));
        },
        customValidator(value) {
            return value === 'custom';
        },
        passwordValidator(value) {
            let res = true;
            if (value.length > 8) {
                res = false;
            }
            return res;
        },
        checkForm(e) {
            e.preventDefault();
            this.errors = [];
            if (!this.email) {
                this.$alert('Email inválido');
            } else if (!this.emailValidator(this.email)) {
                this.$alert('Email inválido.');
            }
            if (this.password.length < 8) {
                this.$alert('Tu contraseña debe tener al menos 8 caracteres');
            }
        },
        emailValidator(email) {
            const re = /\S+@\S+\.\S+/;
            if (!email.match(re)) {
                return false;
            }
            return true;
        },
    },
};
</script>

<style scoped>
</style>
