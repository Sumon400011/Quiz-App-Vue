<template>
    <div>
      {{ quiz }}
    </div>
</template>
<script setup>
    import quizes from "../data/quizes.json";
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(item => item.id === quizId);
</script>