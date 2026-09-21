<template>
  <section class="h-[95vh] w-screen bg-sky-100 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-6 text-slate-700">Password Strength Checker</h1>
    
    <div class="relative">
      <input 
        type="password" 
        class="border-2 border-slate-300 rounded-lg h-12 w-80 pl-4 pr-20 outline-none focus:border-sky-500 transition" 
        placeholder="Type your password" 
        v-model="passw"
      >
      <p 
        class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-sm capitalize"
        :class="{
          'text-red-500': status === 'weak',
          'text-yellow-500': status === 'medium',
          'text-green-500': status === 'strong'
        }"
      >
        {{ status }}
      </p>
    </div>

    <div class="mt-6 space-y-1 text-sm text-slate-600">
      <p :class="checkLength ? 'text-green-600' : 'text-slate-400'">
        {{ checkLength ? '✓' : '✗' }} At least 12 characters
      </p>
      <p :class="checkLower ? 'text-green-600' : 'text-slate-400'">
        {{ checkLower ? '✓' : '✗' }} One lowercase letter
      </p>
      <p :class="checkUpper ? 'text-green-600' : 'text-slate-400'">
        {{ checkUpper ? '✓' : '✗' }} One uppercase letter
      </p>
      <p :class="checkDigit ? 'text-green-600' : 'text-slate-400'">
        {{ checkDigit ? '✓' : '✗' }} One number
      </p>
      <p :class="checkSpecial ? 'text-green-600' : 'text-slate-400'">
        {{ checkSpecial ? '✓' : '✗' }} One special character
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const passw = ref('');
const status = ref(null);

const checkLength = computed(() => passw.value.length >= 12);
const checkLower = computed(() => /[a-z]/.test(passw.value));
const checkUpper = computed(() => /[A-Z]/.test(passw.value));
const checkDigit = computed(() => /\d/.test(passw.value));
const checkSpecial = computed(() => /[^A-Za-z0-9]/.test(passw.value));

watch(passw, (newVal) => {
  if (!newVal) {
    status.value = 'weak';
    return;
  }

  if (checkLength.value && checkLower.value && checkUpper.value && checkDigit.value && checkSpecial.value) {
    status.value = 'strong';
  }
  else if (newVal.length >= 8 && (checkLower.value || checkUpper.value) && checkDigit.value) {
    status.value = 'medium';
  }
  else {
    status.value = 'weak';
  }
});
</script>

<style scoped>
</style>