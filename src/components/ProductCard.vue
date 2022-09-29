<template lang="">
    <section>
        <b-button @click="obtenerProductos()" variant="primary"  class="btnProductos">Ver productos</b-button>
        <div class="container">
            <b-card
                v-for="producto in productos" :key="producto.id"
                img-top
                tag="article"
                class="mb-2 cardProduct">
                <b-card-img :src="producto.imagen" class="cardImagen"></b-card-img>
                <b-card-title class="cardTitle">
                    {{producto.nombre}}
                </b-card-title>
                <b-card-text class="cardDescripcion">
                    {{producto.descripcion}}
                </b-card-text>
            </b-card>
        </div>
    </section>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Productos',
    data() {
        return {
            productos: [],
        };
    },
    methods: {
        send() {
            this.$emit('LlevarCarrito');
            console.log('entra');
        },
        async obtenerProductos() {
            const data = await axios.get('https://6334e25e849edb52d6f8ce26.mockapi.io/productos');
            this.productos = data.data;
        },
    },
};
</script>
    <style scoped>
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .cardProduct {
            width: 100%;
        }
        .cardImagen{
            object-fit: cover;
            object-position: center;
            width: 100%;
        }
        @media only screen and (min-width:769px) {
        .container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            margin-bottom: 10rem;
        }
        .card-body {
            /* width: 30%;
            height: 50vh;
            margin: 0 auto; */
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "img titulo"
                "img descripcion";
        }
        .cardImagen{
            grid-area: img;
            object-fit: cover;
            object-position: center;
            height: 50vh;
            width: 90%;
        }
        .cardTitle {
            grid-area: titulo;
        }
        .cardDescripcion{
            grid-area: descripcion;
        }

    }
</style>
