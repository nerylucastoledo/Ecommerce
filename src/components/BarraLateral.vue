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
    margin-top: 100px;
    background-color: #fff;
    min-width: 200px;
    text-align: center;
    margin-right: 40px;
}

.sidebar li {
    font-size: 18px;
    padding: 15px 0px;
    border-radius: 10px;
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

</style>