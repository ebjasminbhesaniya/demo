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

    <h1>{{ message }}</h1>
    <h1>{{ reversedMessage }}</h1>

    <div>
      <button
        @click="
          a++;
          addtoa;
        "
      >
        Add to A
      </button>
      <button @click="b++">Add to B</button>
      <p>A- {{ a }}</p>
      <p>B- {{ b }}</p>
      <p>Age + A = {{ addtoa }}</p>
      <p>Age + B = {{ addtob }}</p>
    </div>

    <table border="2px solid black" width="500px">
      <tr>
        <th>id</th>
        <th>employee name</th>

        <th>on leave</th>
        <th></th>
      </tr>
      <tr v-for="emp in employee" :key="emp.name">
        <td>{{ emp.id }}</td>
        <td>{{ emp.name }}</td>
        <td><span v-show="(star = false)">*</span></td>
        <td><button @click="starprint(emp)">on leave</button></td>
      </tr>
    </table>

    <h1>{{ filter | filterB | capitalize }}</h1>
    <a :href="href">goto</a>
    <div :id="rowid | capitalize"></div>

    <ul>
      <li v-for="item in props" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: ["props"],
  data() {
    return {
      rowid: "rowid",
      href: "www.google.com",
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
      message: "hello",
      age: 20,
      a: 0,
      b: 0,
      employee: [
        { id: 1, name: "jay", star: false },
        { id: 2, name: "jb", star: false },
        { id: 3, name: "jasmin", star: false },
      ],
      // star: false,
      selectitem: "",
      filter: "string",
    };
  },
  computed: {
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    addtoa() {
      console.log("A");
      return this.a + this.age;
    },
    addtob() {
      console.log("B");
      return this.b + this.age;
    },
  },

  methods: {
    // reversedMessage() {
    //   return this.message
    //     .split("")
    //     .reverse()
    //     .join("");
    // },
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
    starprint(emp) {
      console.log(emp.id);
      this.employee.star = true;
      this.star = true;
      console.log(emp.star);
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
