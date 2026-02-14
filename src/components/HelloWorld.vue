<template>
  <div class="max-w-md mx-auto p-8 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
    
    <!-- Access state directly -->
    <p class="text-4xl font-bold text-emerald-600 mb-2">{{ counter.count }}</p>
    
    <!-- Access getters -->
    <p class="text-gray-600 mb-6">Double: {{ counter.doubleCount }}</p>
    
    <!-- Call actions -->
    <div class="flex gap-3">
      <button 
        @click="counter.increment()"
        class="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
        Increment
      </button>
      
      <button 
        @click="counter.decrement()"
        class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Decrement
      </button>
      
      <button 
        @click="counter.reset()"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  name: 'CounterView',
  setup() {
    const counter = useCounterStore()
    
    return {
      counter
    }
  }
}
</script>