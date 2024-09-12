<template>
    <div class="sidebar">
      <ul>
        <li v-for="option in options" :key="option" @click="click(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        options: ['Calculadora', 'Histórico', 'Mais sobre Fração Geratriz', 'Ajuda']
      };
    },
    methods: {
      click(option) {
        alert(`Você clicou em: ${option}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background-color: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar li {
    padding: 10px;
    cursor: pointer;
  }
  
  .sidebar li:hover {
    background-color: #444;
  }
  </style>
  