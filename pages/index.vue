<script lang="ts" setup>
const { $fullCalendar } = useNuxtApp()
const FullCalendar = $fullCalendar
</script>
<template>
  <div>
    <ClientOnly>
      <FullCalendar :options="FullCalendar.options" />
    </ClientOnly>
  </div>
</template>

