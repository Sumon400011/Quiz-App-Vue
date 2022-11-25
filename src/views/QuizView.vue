<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <Question 
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result 
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
      <!-- <button @click="currentQuestionIndex++">Next Question</button> -->
    </div>
  </div>
</template>
<script setup>
  import Question from "../components/Question.vue"
  import QuizHeader from "../components/QuizHeader.vue"
  import Result from "../components/Result.vue"
  import quizes from "../data/quizes.json";
  import { useRoute } from 'vue-router';
  import { ref, computed } from "vue";
  
  // Inits
  const route = useRoute();
  const quizId = parseInt(route.params.id)
  const quiz = quizes.find(item => item.id === quizId);
  
  const currentQuestionIndex = ref(0);
  const numberOfCorrectAnswers = ref(0);
  const showResults = ref(false);
  // const questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`;

  // Functions
  const onOptionSelected = (isCorrect) => {
    if(isCorrect){
      numberOfCorrectAnswers.value++;
    }
    if(quiz.questions.length - 1 === currentQuestionIndex.value){
      showResults.value = true;
    }
    currentQuestionIndex.value++
  }

  //computed methodes
  const questionStatus = computed(()=> `${currentQuestionIndex.value}/${quiz.questions.length}`)
  const barPercentage = computed(()=> `${currentQuestionIndex.value / quiz.questions.length * 100}%`)
</script>