<template>
    <div>
        <div v-for="cliente of clientes">
            <div>Nombre: {{cliente.nombre}}</div>
            <div>Rut: {{cliente.rut}}</div>
            <div>Sueldo: {{cliente.sueldo}}</div>
            <button @click="eliminar_cliente(cliente.rut)">Eliminar</button>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Clientes',
    data: function() {
        return {
            clientes: []
        }
    }, 
    created: function() {
        this.obtener_todos()
    },
    methods: {
        eliminar_cliente: function(rut){
            axios
            .delete('http://localhost:3000/' + rut)
            .then( respuesta => {
                console.log('Lo borre correctamente sin problemas soy el mejor')
                this.obtener_todos()
            })
        },
        obtener_todos() {
            axios
                .get('http://localhost:3000')
                .then(respuesta => this.clientes = respuesta.data)
        }
    }
}
</script>

<style scoped>
.contenedor {
    display: flex;
    border: solid 10px red;
    flex-wrap: wrap;
}
.item {
    border-left: solid 3px orange;
    border-bottom: solid 3px red;
    border-bottom-right-radius: 15px;
    margin-left: 4px;
}
.estado {
    color: lime;
}
.boton {
    align-self: center;
    font-size: 20px;
    font-family: monospace;
}
</style>