<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <Calculadora />
    </div>
    <footer>
      <p>Feito por Jair Augusto</p>
    </footer>
  </div>
</template>

<script>
import Sidebar from './components/BarraLateral.vue';
import Calculadora from './components/Calculadora.vue';

export default {
  components: {
    Sidebar,
    Calculadora
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  padding: 10px;
  font-size: 14px;
}
</style>
