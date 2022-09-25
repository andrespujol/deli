<template lang="">
  <section>
    <div>
      <h1>Registrate</h1>
    </div>
    <vue-form :state="formState" @submit.prevent="onSubmit">
      <validate :custom="{validator:mailValidator}">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          description="Nunca compartiremos esta información."
        >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Ingresar email"
          required
          ></b-form-input>
        </b-form-group>
      </validate>
      <validate>
        <b-form-group
          id="input-group-2"
          label="Nombre"
          label-for="input-2"
        >
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="text"
          placeholder="Nombre completo"
          required
          ></b-form-input>
        </b-form-group>
      </validate>
      <validate>
        <b-form-group
          id="input-group-3"
          label="Género:"
          v-model="form.genero"
          label-for="select "
        >
        <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-form-group>
      </validate>
      <validate :custom="{validator:passwordValidator}">
        <b-form-group
          id="input-group-4"
          label="Password:"
          label-for="text-password"
          description="Tu contraseña debe tener al menos 8 caracteres."
        >
        <b-form-input
          type="password"
          id="text-password"
          v-model="form.password"
          placeholder="Ingresar contraseña"
          required
        ></b-form-input>
        </b-form-group>
      </validate>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </vue-form>
  <div>
<b-table-simple responsive>
  <b-thead>
    <b-tr>
      <b-th>Nombre</b-th>
      <b-th>Email</b-th>
      <b-th>Género</b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr>
      <b-td>{{ form.name }}</b-td>
      <b-td>{{ form.email }}</b-td>
      <b-td>{{ selected }}</b-td>
    </b-tr>
  </b-tbody>
</b-table-simple>
  </div>
  </section>
</template>
<script>
export default {
    name: 'registerForm',
    data() {
        return {
            formState: {
            },
            form: {
                email: '',
                name: '',
                password: '',
                genero: '',
            },
            selected: '',
            options: [
                {
                    value: '', text: 'Por favor, elige un género',
                },
                {
                    value: 'M', text: 'Mujer',
                },
                {
                    value: 'H', text: 'Hombre',
                },
                {
                    value: 'NB', text: 'No binario',
                },
                {
                    value: 'NS/NC', text: 'Prefiero no decirlo',
                },
            ],
            show: true,

        };
    },
    methods: {
        onSubmit() {
            if (this.formState.$invalid) {
                this.$alert('Tenés que completar todos los datos');
                return;
            }
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
        customValidator(value) {
            return value === 'custom';
        },
        passwordValidator(value) {
            let res = false;
            if (value.length >= 8) {
                res = true;
            }
            return res;
        },
        mailValidator(value) {
            let res = true;
            if (!value.includes('@')) {
                res = false;
            }
            if (!value.includes('.com')) {
                res = false;
            }
            return res;
        },
    },
};

</script>
<style scoped>
</style>
