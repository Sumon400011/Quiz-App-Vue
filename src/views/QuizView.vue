<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]"/>
      <!-- <Result /> -->
    </div>
  </div>
</template>
<script setup>
  import Question from "../components/Question.vue"
  import QuizHeader from "../components/QuizHeader.vue"
  // import Result from "../components/Result.vue"
  import quizes from "../data/quizes.json";
  import { useRoute } from 'vue-router';
  import { ref } from "vue";
  
  const route = useRoute();
  const quizId = parseInt(route.params.id)
  const quiz = quizes.find(item => item.id === quizId);
  
  const currentQuestionIndex = ref(0);
  const questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`;
</script>