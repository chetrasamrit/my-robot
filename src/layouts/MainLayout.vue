<script setup>
</script>

<template>
  <div>
    <header style="background:#111; color:white; padding:10px;">
      <h2>My Header</h2>
    </header>

    <main style="padding:20px;">
      <slot />
    </main>

    <footer style="background:#eee; padding:10px;">
      <p>My Footer</p>
    </footer>
  </div>
</template>
