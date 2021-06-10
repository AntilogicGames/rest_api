<template>
    <div>
        <div>Nombre:</div>
        <div><input v-model="cliente.nombre"></div>
        <div>Rut:</div>
        <div><input v-model="cliente.rut"></div>
        <div>Sueldo:</div>
        <div><input v-model="cliente.sueldo"></div>
        <div><button @click="crear_cliente">CREAR</button></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ClientesCrear',
    data: function() {
        return {
            cliente: {
                nombre: '',
                rut: '',
                sueldo: 0
            }
        }
    },
    methods: {
        crear_cliente: function() {
            axios.post('http://localhost:3000', this.cliente)
            .then( x => {
                console.log('CLIENTE CREADO OK')
                this.cliente.nombre = this.cliente.rut = ''
                this.cliente.sueldo = 0
            })
        }
    }
}
</script>

<style scoped></style>