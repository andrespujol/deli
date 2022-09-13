<template lang="">
    <section class="container">
        <article
            v-for="cake in cakes" :key="cake.id"
            img-top
            tag="article">
            <img :src="cake.url" alt="cake image"/>
            <p>
                {{cake.title}}
            </p>
            <p>
                {{cake.txt}}
            </p>
        </article>
    </section>
</template>
<script>
export default {
  name: 'ProductCard',
  data: () => ({
    show: false,
    cakes: [
      {
        id: 1,
        url: 'https://d22fxaf9t8d39k.cloudfront.net/27810c7c7d7ec0585d164b3875710d3a1bbbc6a619bb9dc72aa2e232f8c21b9321167.jpeg',
        title: 'Red velvet',
        txt: '3 Cortes de Bizcochuelo Red Velvet relleno con crema mascarpone y chocolate blanco.',
      },
      {
        id: 2,
        url: 'https://d22fxaf9t8d39k.cloudfront.net/d7a10d417288baff3c99fc59ce42dc46accdb0a0b7ef816c38480db1092f5f3e21167.png',
        title: 'Torta Balcarce',
        txt: 'Torta en tres capas que alternan biscuit de vainilla y coco, dulce de leche, discos de merengue, crema Chantilly, nueces y castañas en almíbar.',
      },
      {
        id: 3,
        url: 'https://d22fxaf9t8d39k.cloudfront.net/d641acdf7790c2b4ab1af57a811e7c436572a6f0851af225e0ae5db9b5da4f8f21167.jpeg',
        title: 'Mousse de Chocolate',
        txt: 'Torta Mousse de Chocolate. Base de pionono de vainilla y mousse de chocolate amargo. Cubierta con Ganache de chocolate.',
      },
    ],
  }),
};
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    article {
        width: 100%;
    }
    img{
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
    article {
        width: 30%;
        height: 50vh;
        margin: 0 auto;
    }
    img{
        object-fit: cover;
        object-position: center;
        height: 50vh;
        width: 90%;
    }
    }
</style>
