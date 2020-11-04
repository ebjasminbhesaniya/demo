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
    <h1>{{ string }}</h1>
    <!-- <div slot="header"></div> -->
    <slot name="header"></slot>
    <slot></slot>
    <!-- <slot></slot> -->
    <!-- <h3>{{ name }}</h3> -->
    <h3 v-for="item in name" :key="item.name">{{ name }}</h3>

    <form>
      <div v-if="!editing">
        <label>first name</label>
        <input type="text" v-model="fname" />
        <label>mobile no</label>
        <input type="text" v-model="mno" />
        <button @click.prevent="save">add</button>
      </div>
      <div v-else>
        <label>first name</label>
        <input type="text" v-model="fname" />
        <label>mobile no</label>
        <input type="text" v-model="mno" />
        <button @click.prevent="addupdate">update</button>
      </div>
    </form>
    <table border="2px" width="500px">
      <tr>
        <th>no.</th>
        <th>first name</th>
        <th>mobile no</th>
        <th>Edit/Delete</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.name">
        <td>{{ index }}</td>
        <td>{{ user.fname }}</td>
        <td>{{ user.mno }}</td>
        <td>
          <button @click="change(index, user)">Edit</button>
          <button @click="deleted(index)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: ["name"],
  data() {
    return {
      string: "jasmin",
      selectedindex: null,
      isediting: false,
      todos: [],
      currentTodo: "",
      fname: "",
      mno: "",
      users: [],
      selectindex: "",
      editing: false,
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
    save() {
      this.users.push({ fname: this.fname, mno: this.mno });
      this.fname = "";
      this.mno = "";
    },
    change(index, item) {
      this.fname = item.fname;
      this.mno = item.mno;
      this.selectindex = index;
      this.editing = true;
      console.log(index);
    },
    addupdate() {
      this.users.splice(this.selectindex, 1, {
        fname: this.fname,
        mno: this.mno,
      });
      this.editing = false;
    },
    deleted(index) {
      this.selectindex = index;
      this.users.splice(this.selectindex, 1);
    },
  },
  created() {
    this.string = "jb";
    console.log("after");
  },
  beforeCreate() {
    console.log("before created");
  },
};
</script>
<style></style>
