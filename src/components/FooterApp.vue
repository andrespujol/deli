<template lang="">
    <footer>
        <h1>Deli</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>ContactUs</li>
            </ul>
        </nav>
    </footer>
</template>
<script>
export default {
};
</script>
<style scoped>
    footer {
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
        padding-left: 10px;
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
