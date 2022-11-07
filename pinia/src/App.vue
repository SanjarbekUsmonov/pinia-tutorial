<template>
  <div>
    <main>

      <header>
       <h1>pinia</h1>
      </header>
      <!-- Task list -->
      <div class="task-list">
        <div v-for="task in tascStore.tasks" :key="task.id">
         <!-- <TaskDetail :task="task"/> -->
         {{task}}
         <div>
          {{task.title}}
         </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TaskDetail from './components/TaskDetail.vue'
import {useTascStore} from "./stores/TascStore"
  export default {
  components: { TaskDetail },
    setup() {
      const tascStore = useTascStore()
      return{tascStore}
    }
  }
</script>

<style  scoped>

</style>