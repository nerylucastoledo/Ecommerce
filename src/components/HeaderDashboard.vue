<template>
    <ul>
        <li>
            <router-link to="/dashboard">
                <span>
                    <font-awesome-icon icon="chart-bar" size="1x"/>
                </span>

                <p>Painel</p>
            </router-link>
        </li>

        <li>
            <router-link :to="{ name: 'CadastrarItem' }">
                <span>
                    <font-awesome-icon icon="cubes" size="1x"/>
                </span>

                <p>Cadastrar</p>
            </router-link>
        </li>

        <li>
            <router-link :to="{ name: 'AtualizarItem' }">
                <span>
                    <font-awesome-icon icon="pen" size="1x"/>
                </span>
                
                <p>Atualizar</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "BarraLateral"
}
</script>

<style>

.sidebar {
    width: 100%;
    margin-top: 100px;
    background-color: #fff;
    min-width: 200px;
    text-align: center;
    margin-right: 40px;
}

.sidebar ul {
    display: flex;
    justify-content: center;
}

.sidebar li {
    font-size: 18px;
    padding: 15px 10px;
    border-radius: 10px;
    margin-right: 30px;
}

.sidebar p {
    display: inline-block;
    margin-left: 10px;
}

.sidebar a:hover {
    transition: .3s;
    color: #FFBA00;
}

.sidebar li:hover {
    background-color: #f5f7fb;
    transition: .3s;
}

@media (max-width: 760px) {
    .sidebar ul {
        margin-top: 120px;
        justify-content: space-around;
    }

    .sidebar li {
        margin-right: 0px;
    }
}

@media (max-width: 480px) {
    .sidebar li {
        padding: 10px 5px;
    }

    .sidebar li span {
        display: none;
    }
}

</style>