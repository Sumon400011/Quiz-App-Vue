<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text" style="padding:10px 15px;">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>
<script setup>
    // `defineProps` is a compiler macro and no longer needs to be imported.
    import { defineProps } from 'vue';

    // import useRouter for programmatically use router
    import { useRouter } from 'vue-router';

    const router = useRouter();

    // function for card to navigate quiz
    const navigateToQuiz = () => {
      router.push(`/quiz/${quiz.id}`)
    }
    
    //distructuring the quiz
    const { quiz } = defineProps(["quiz"]);

</script>

<style scoped>
  /* CARD */
  .card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0
  }

  .card .card-text {
    padding: 0 5px
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>