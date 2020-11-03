<template>
  <div>
    <input type="checkbox" value="jb" v-model="chknames" />
    <label>jb</label>
    <input type="checkbox" value="jsda" v-model="chknames" />
    <label>jsda</label>
    <input type="checkbox" value="ldfkldk" v-model="chknames" />
    <label>ldfkldk</label>
    <input type="checkbox" value="fskjks" v-model="chknames" />
    <label>fskjks</label>
    <br />
    <h2>checked names : {{ chknames }}</h2>
    <div>
      <input type="radio" value="one" v-model="radioname" />
      <label>one</label>
      <input type="radio" value="two" v-model="radioname" />
      <label>two</label>
      <input type="radio" value="three" v-model="radioname" />
      <label>three</label><br />
      <h2>{{ radioname }}</h2>
    </div>
    <form>
      <label>ID:</label>
      <input type="text" placeholder="Enter ID" v-model="idtext" /><br />
      <label>Enter Name :</label>
      <input
        type="text"
        placeholder="Enter your name"
        v-model="nametext"
      /><br />
      <label>Skill :</label>
      <input
        type="text"
        placeholder="Enter your skill"
        v-model="skilltext"
      /><br />
      <label>MObile No.</label>
      <input
        type="text"
        placeholder="Enter your mobile number"
        v-model="mobiletext"
      /><br />
    </form>
    <button @click="add">ADD</button>
    <table border="2px solid black" width="300px">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Skill</th>
        <th>Mobile no.</th>
        <th>edit/delete</th>
      </tr>

      <tr v-for="stud in students" :key="stud.id">
        <td>{{ stud.id }}</td>
        <td>{{ stud.name }}</td>
        <td>{{ stud.skill }}</td>
        <td>{{ stud.mobile }}</td>
        <td>
          <button @click="edit">Edit</button>
          <button @click="remove">Delete</button>
        </td>
      </tr>
    </table>

    <select id="cars" v-model="selected" multiple>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    <h1>{{ selected }}</h1>
    <br />
    <h1>todo list :</h1>
    <br />

    <input type="text" v-model="addtext" />
    <button @click="save">save</button>

    <ul>
      <li v-for="todo in todos" :key="todo.name">
        {{ todo | capitalize }}
        <button @click="editTodo">Edit</button>
        <button @click="removeTodo">delete</button>
      </li>
    </ul>
    <h1>{{ name | capitalize }}</h1>
  </div>
</template>
<script>
export default {
  name: "demo2",
  data() {
    return {
      name: "jasmin",
      chknames: [],
      radioname: "",
      idtext: "",
      nametext: "",
      skilltext: "",
      mobiletext: "",
      addtext: "",
      selected: [],
      students: [],
      todos: [],
    };
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase();
    },
  },
  methods: {
    add() {
      this.students.push({
        id: this.idtext,
        name: this.nametext,
        skill: this.skilltext,
        mobile: this.mobiletext,
      });
      this.clearForm();
    },
    clearForm() {
      this.idtext = "";
      this.nametext = "";
      this.skilltext = "";
      this.mobiletext = "";
    },
    save() {
      this.todos.push(this.addtext);
      this.addtext = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
