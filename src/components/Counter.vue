<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>

<template>

    <div>
        <header>
            <nav>
                <ul class="flex">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        <h1>{{ counter.title }}</h1>
        <h2>Count: {{ counter.count }}</h2>
        <h2>Name: {{ counter.name }}</h2>
        <h2>Position: {{ counter.position }}</h2>
        <button @click="counter.increment()">+</button>
        <button @click="counter.decrement()">-</button>

        <button @click="counter.changeTitle()">Change Title</button>

        <div>
            <h1>Posts:</h1>
            <ul>
                <li v-for="post in counter.postCalltoUse" :key="post.id">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.content }}</p>
                </li>
            </ul>
        </div>

    </div>
</template>
