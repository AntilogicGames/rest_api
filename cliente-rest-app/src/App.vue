<template>
    <div id="app">
        <!-- <Clientes/>
        <ClientesCrear/> -->
        <TestAPI/>
        <!-- <Bitcoin/> -->
    </div>
</template>

<script>
import TestAPI from './components/otros/TestAPI'
import Bitcoin  from './components/otros/Bitcoin'
import Clientes from './components/otros/Clientes'
import ClientesCrear from './components/otros/ClientesCrear'

export default {
    name: 'App',
    components: { Bitcoin, Clientes, ClientesCrear, TestAPI }
}
</script>

<style>
    body {
        background-color: black;
        color: white;
    }
    #app {
        font-family: monospace;
    }
</style>