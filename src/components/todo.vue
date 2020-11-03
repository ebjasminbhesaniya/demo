<template>
  <div>
    <h1>Todo list</h1>
    <form>
      <div v-if="!isediting">
        <input type="text" v-model="currentTodo" ref="note" />
        <button type="submit" @click.prevent="addtodo">Add Todo</button>
      </div>
      <div v-else>
        <input type="text" v-model="currentTodo" ref="note" />
        <button type="submit" @click.prevent="update">update Todo</button>
      </div>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.name">
        {{ index }}. {{ todo | capitalize }}
        <button @click="edit(index, todo)">edit</button>
        <button @click="remove(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      selectedindex: null,
      isediting: false,
      todos: ["vue", "vuex", "nuxt"],
      currentTodo: "",
    };
  },
  methods: {
    addtodo() {
      this.todos.push(this.currentTodo);
      this.currentTodo = "";
    },
    remove(index) {
      this.todos.splice(index, 1);
    },
    edit(index, todo) {
      this.currentTodo = todo;
      this.selectedindex = index;
      this.isediting = true;
    },
    update() {
      this.todos.splice(this.selectedindex, 1, this.currentTodo);
      this.isediting = false;
    },
  },
};
</script>
<style></style>
