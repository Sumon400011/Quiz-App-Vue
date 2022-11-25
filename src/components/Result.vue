<template>
    <div class="results">
        <p>your Results</p>
        <h1>
            <!-- {{resultCount}} -->
            {{numberOfCorrectAnswers}} / {{quizQuestionLength}}
        </h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>
<script setup>
    // import { defineProps, computed } from 'vue';
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const { 
        quizQuestionLength, 
        numberOfCorrectAnswers
    } = defineProps([
        "quizQuestionLength",
        "numberOfCorrectAnswers"
    ]);

    // const resultCount = computed(()=> {
    //     return `$const resultCount = computed(()=> {
    //     return `${numberOfCorrectAnswers} / ${quizQuestionLength}`;
    // })`;
    // })

</script>
<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}
p {
    font-size: 25px;
}
h1 {
    font-size: 80px;
}
</style>