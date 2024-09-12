<template>
  <div :class="['calculator', theme]">
    <div class="display">
      <input v-model="displayValue" @keyup.enter="calculateResult" @input="clearFractionResult" @keyup.esc="clearInput"
        type="text" placeholder="Digite um número decimal" />
      <div v-if="fractionResult">
        Fração Geratriz: {{ fractionResult }}
      </div>
    </div>
    <div class="buttons">
      <button v-for="button in buttons" :key="button" @click="buttonClick(button)">
        {{ button }}
      </button>
    </div>
    <button class="theme-toggle" @click="toggleTheme">🌓</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayValue: '',
      fractionResult: '',
      buttons: [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
      ],
      theme: 'light'
    };
  },
  methods: {
    buttonClick(button) {
      if (button === '=') {
        this.calculateResult();
      } else if (button === 'C') {
        this.clearInput();
      } else {
        this.displayValue += button;
        this.fractionResult = '';
      }
    },
    calculateResult() {
      if (this.displayValue) {
        try {
          const evaluatedValue = eval(this.displayValue);
          this.displayValue = evaluatedValue.toString();

          if (parseFloat(this.displayValue) === 0) {
            this.fractionResult = '0/1';
          } else {
            this.fractionResult = this.getFraction(parseFloat(evaluatedValue));
          }
        } catch {
          this.displayValue = 'Error';
          this.fractionResult = '';
        }
      }
    },
    clearInput() {
      this.displayValue = '';
      this.fractionResult = '';
    },
    clearFractionResult() {
      if (!this.displayValue) {
        this.fractionResult = '';
      }
    },
    getFraction(decimal) {
      if (isNaN(decimal)) return '';
      let numerator = 1;
      let denominator = 1;
      let precision = 1000000;
      while (Math.abs(decimal - numerator / denominator) > 1 / precision) {
        if (numerator / denominator < decimal) {
          numerator++;
        } else {
          denominator++;
        }
      }
      return `${numerator}/${denominator}`;
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
};
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: inherit;
}

.display {
  width: 100%;
  max-width: 360px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  min-height: 60px;
  text-align: center;
  background-color: inherit;
  color: inherit;
  overflow: hidden;
  word-wrap: break-word;
}

input {
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: none;
  background-color: inherit;
  color: inherit;
  text-align: center;
  box-sizing: border-box;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 86px);
  gap: 5px;
  margin-bottom: 20px;
}

button {
  width: 100%;
  height: 60px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  box-sizing: border-box;
}

button:hover {
  background-color: #e0e0e0;
}

.theme-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  padding: 0;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.theme-toggle:hover {
  background-color: #a5a5a5;
}

.light {
  background-color: #f5f5f5;
  color: #000;
}

.light .display {
  background-color: #fff;
}

.light button {
  background-color: #e0e0e0;
}

.dark {
  background-color: #333;
  color: #fff;
}

.dark .display {
  background-color: #444;
}

.dark button {
  background-color: #555;
}

.dark button:hover {
  background-color: #666;
}
</style>