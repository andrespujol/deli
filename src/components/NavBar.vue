<template>
    <header>
        <h1>Deli</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li>Productos</li>
                <li>ContactUs</li>
                <li>Registro</li>
                <li>Iniciar sesión</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>
<style scoped>
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #313131;
    }
    h1{
        width: 30%;
        color: #fff;
        text-align: left;
        margin-left: 1rem;
    }
    nav{
        width: 50%;
    }
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    li{
        list-style: none;
        color: #fff;
        padding: 5px;
        margin-right: 1rem;
    }
    @media only screen and (min-width:769px) {
        ul{
            width: 80%;
            flex-direction: row;
        }
        li{
            margin-right: 0;
            padding: 0;
        }
    }
</style>
