<script setup lang="ts">
import { ref, nextTick, onMounted, computed } from "vue";

const sin = ref(Array(9).fill("")); // Array used to store the SIN and for v-model input.
const inputs = ref<HTMLInputElement[]>([]); // Array used to store the input elements.

// Function to handle moving to the next input field in input
const moveNextInput = async (index: number) => {
  if (sin.value[index].length === 1 && index < 8) {
    await nextTick();
    inputs.value[index + 1]?.focus(); // Move focus to the next input
  }
};

// Function to handle moving to the previous input field on backspace
const movePrevInput = async (index: number) => {
  if (sin.value[index] === "" && index > 0) {
    await nextTick();
    inputs.value[index - 1]?.focus(); // Move focus to the previous input
  }
};

const clearInput = () => {
  sin.value = Array(9).fill(""); // Clear the sin array
  inputs.value[0]?.focus(); // Move focus to the first input
};

// Function to prevent user from editing input fields based on previous input. More for comestic and user experience.
const canEditField = (index: number) => {
  if (index === 0) {
    return true;
  }
  if (sin.value[index - 1] !== "") {
    return true;
  }
  return false;
};

// SIN is ready for validation when all 9 digits are entered.
const sinIsReady = computed(
  () =>
    sin.value.length === 9 && sin.value.every((char) => !isNaN(parseInt(char)))
);

// TODO: Implement valid check. Check if the SIN is valid. 
const sinIsValid = computed(() => {return sin.value[0] % 2 === 0})

onMounted(() => {
  nextTick(() => {
    inputs.value[0]?.focus(); // Focus the first input on mounted
  });
});

</script>
<template>
  <div id="app" class="flex justify-center space-x-2 mb-10">
    <div class="flex space-x-2">
      <div v-for="(digit, index) in sin" :key="index">
        <input
          ref="inputs"
          type="text"
          v-model="sin[index]"
          @input="moveNextInput(index)"
          @keydown.backspace="movePrevInput(index)"
          maxlength="1"
          :disabled="!canEditField(index)"
          :class="{
            'bg-green-100 border-green-400': sinIsReady && sinIsValid,
            'bg-red-100 border-red-400': sinIsReady && !sinIsValid,
          }"
          class="w-28 h-28 text-center border-2 rounded-lg focus:outline-none text-4xl"
        />
      </div>
    </div>
    <button
      class="btn btn-neutral w-28 h-28 text-center border-2 rounded-lg focus:outline-none text-xl"
      @click="clearInput()"
    >
      CLEAR
    </button>
  </div>
</template>
