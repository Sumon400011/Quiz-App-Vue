<template>
  <div>
    <QuizHeader />
    <div>
      <Question/>
      <Result />
    </div>
  </div>
</template>
<script setup>
  import Question from "../components/Question.vue"
  import QuizHeader from "../components/QuizHeader.vue"
  import Result from "../components/Result.vue"
  // import quizes from "../data/quizes.json";
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const quizId = parseInt(route.params.id)
  // const quiz = quizes.find(item => item.id === quizId);
</script>