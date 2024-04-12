<template>
  <div class="card">
    <div class="container">
      <div class="advice">
        <h1 class="advice-title">Advice #{{ advice?.id }}</h1>
        <p class="advice-text">"{{ advice?.advice }}"</p>
        <img
          src="./img/pattern-divider-desktop.svg"
          alt="divider"
          class="divider"
        />
      </div>
    </div>
    <div class="dice-container">
      <img
        src="./img/icon-dice.svg"
        alt="dice"
        class="dice"
        @click="fetchNewAdvice"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { AdviceApi } from "../src/Services/AdviceApi";
import { type Advice } from "../src/Types/adviceTypes";

const advice = ref<Advice | null>(null);

const fetchNewAdvice = async () => {
  try {
    const response = await AdviceApi();
    advice.value = response;
    console.log(advice.value);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(218, 23%, 16%);
  font-family: "Manrope", sans-serif;
  position: relative;
  overflow: hidden;
}

.container {
  display: flex;
  background-color: hsl(217, 19%, 24%);
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  height: 310px;
  border-radius: 20px;
  align-items: center;
  gap: 1.5rem;
  font-family: "Manrope", sans-serif;
  color: hsl(193, 38%, 86%);
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 30rem;
  position: relative;
  z-index: 1;
}

.advice {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  max-width: 30rem;
  margin-bottom: 1.5rem;
}

.advice-title {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 30rem;
  position: relative;
  z-index: 1;
  color: hsl(150, 100%, 66%);
}

.advice-text {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 30rem;
  position: relative;
  z-index: 1;
}

.divider {
  width: 100%;
  max-width: 30rem;
  height: auto;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.dice-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 30rem;
  z-index: 1;
  margin-bottom: 1.5rem;
  margin-top: -3.6rem;
}

.dice {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.dice:hover {
  box-shadow: 0 0 10px 5px hsl(150, 100%, 66%);
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

/* modo responsivo */

@media (max-width: 768px) {
  .card {
    height: 100vh;
    padding: 1rem;
  }

  .container {
    padding: 2rem;
    height: 300px;
  }

  .advice-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    max-width: 20rem;
  }

  .advice-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    max-width: 20rem;
  }

  .divider {
    margin-bottom: 1rem;
    max-width: 20rem;
  }

  .dice-container {
    margin-top: -3rem;
    max-width: 20rem;
  }

  .dice {
    padding: 1rem;
    max-width: 20rem;
  }
}
</style>
