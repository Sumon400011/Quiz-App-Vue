<script setup>
  import data from "../data/quizes.json";
  import { ref, watch } from "vue";
  import Card from "../components/Card.vue"
  import gsap from "gsap";

  const quizes = ref(data);
  const search = ref("");

  const beforeEnter = (el) => {
    // card-enter-from
    el.style.opacity = 0;
    el.style.transform = "translateY(-60px)"
  }
  const onEnter = (el) => {
    // card-enter-to
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: el.dataset.index * 0.3
    })
  }
  const afterEnter = (el) => {
    // card-enter-active
  }

  watch(search, () => {
    quizes.value = data.filter((check) => {
      return check.name.toLowerCase().includes(search.value);
    });
  });
</script>
<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" v-model.trim="search" placeholder="Search...">
    </header>
    <!-- v-for="quiz in quizes" :key="quiz.id" -->
    <div class="options-container">
      <TransitionGroup
        name="card"
        appear
        @before-enter="beforeEnter"
        @enter="onEnter"
        @after-enter="afterEnter"
      >
        <Card 
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index="index"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto
  }

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* .card-enter-from{
    transform: translateY(-50px);
    opacity: 0;
  }
  .card-enter-to{
    transform: translateY(-0);
    opacity: 1;
  }
  .card-enter-active{
    transition: all 0.5s ease;
  } */
</style>