<template>
  <div :style="{ backgroundColor: backcolor }">
    <div v-show="!a">hide</div>
    <div v-show="a">show</div>
    <button @click="event">show/hide</button>
    <button @click="changebackground">change background</button>
    <h1>{{ i }}</h1>

    <div v-if="i % 2 == 0" :style="{ background: 'red' }">even number</div>
    <div v-else>odd number</div>
    <button @click="count">count</button>

    <div v-for="users of user" :key="users.name">
      {{ users.name }}
    </div>
    <div v-for="items of stud" :key="items.name">
      {{ items }}
    </div>
    <textarea type="text" v-model="b"></textarea>
    <h1>{{ b }}</h1>
    {{ typeof b }}
    <br />
    <label>enter name</label>
    <input type="text" @change="signalChange($event)" id="input1" />
    <input type="text" :placeholder="text" id="input2" />
    <br />
    <!-- input type demo -->
    <label for="">select input type :-</label>
    <select v-model="selectitem">
      <option value="radio button">radio button</option>
      <option value="button">button</option>
      <option value="color">color</option>
      <option value="date">date</option>
      <option value="password">password</option>
    </select>
    <p>selected :</p>
    <input type="text" :value="selectitem" />
    <h2>selected input type demo:</h2>
    <div v-if="selectitem == 'radio button'">
      <input type="radio" />
      <input type="radio" />
    </div>
    <div v-else-if="selectitem == 'button'">
      <input type="button" value="button" />
    </div>
    <div v-else-if="selectitem == 'color'">
      <input type="color" value="" />
    </div>
    <div v-else-if="selectitem == 'date'">
      <input type="date" value="" />
    </div>
    <div v-else-if="selectitem == 'password'">
      <input type="password" value="" />
    </div>
    <div v-else>
      <h2>please choice input type</h2>
    </div>
    <div v-show="show" :display="block">show the screen</div>
    <button @click="hide">click to hide</button>
    <img :src="text" alt="" />
    <!-- <button :value="value">print btn value</button>
        <h1 v-show="showvalue">{{value}}</h1> -->
    <button @click="printvalue">click me</button>

    <input type="checkbox" v-model="check" /><label for="scales">Scales</label>
    <input type="checkbox" v-model="check1" /><label for="horns">Horns</label>
    <h1>{{ check }},{{ check1 }}</h1>

    <input type="radio" value="one" v-model="rdo" id="r1" /><label for="r1"
      >one</label
    >
    <input type="radio" value="two" v-model="rdo" id="r2" /><label for="r2"
      >two</label
    >
    <h1>choice : {{ rdo }}</h1>
    <br />

    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="" v-model="ftxt" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="" v-model="ltxt" /><br />
    <label for="age">age:</label><br />
    <input
      type="text"
      id="age"
      name="age"
      value=""
      v-model="agetxt"
    /><br /><br />

    <button @click="add">add</button>

    <table border="2px solid black" width="500px">
      <tr>
        <th>fname</th>
        <th>lname</th>
        <th>Age</th>
      </tr>
      <tr v-for="item in rowdata" :key="item.name">
        <td>{{ item.fname }}</td>
        <td>{{ item.lname }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>

    <div
      id="box"
      @mouseover="addcolor"
      :style="{ backgroundColor: boxbgcolor, border: border1 }"
      @mouseleave="oldcolor"
    ></div>

    <table border="2px solid black" width="500px">
      <tr>
        <th>id</th>
        <th>employee name</th>
        <th>on leave</th>
      </tr>
      <tr v-for="emp in employee" :key="emp.name">
        <td>{{ emp.id }}</td>
        <td>{{ emp.name }}</td>
        <td><span v-show="star">*</span></td>
        <td><button @click="starprint(emp.id)">on leave</button></td>
      </tr>
    </table>

    <select v-model="txtcolor">
      <option value="blue">blue</option>
      <option value="red">red</option>
      <option value="black">black</option>
      <option value="yellow">yellow</option>
      <option value="green">green</option>
    </select>
    <h1 :style="{ color: txtcolor }">selected color</h1>
    <input type="text" v-model="font" />
    <p :style="{ fontSize: font + 'px', color: font }">selected font size</p>

    <textarea
      v-model="htmlTag"
      placeholder="using HTML tag"
      rows="4"
      cols="50"
    ></textarea>
    <br />
    <p v-html="htmlTag"></p>

    <textarea v-model="imgpath" placeholder="add img path"></textarea>
    <div>
      <img :src="imgpath" style="width: 500px" />
    </div>

    <input type="text" v-model="m" />
    <input type="text" v-model="n" />
    <h1>Sum = {{ sum }}</h1>
    <button @click="additon">sum</button>

    <div :class="['one-class', 'second-class']"></div>
    <br />

    <button @click="fontinc">++</button>
    <button @click="fontdec">--</button>
    <p :style="{ fontSize: fontsize + 'px' }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      corrupti.
    </p>
    <label for="id">id</label><br />
    <input type="text" id="id" name="fname" value="" v-model="id" /><br />
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="" v-model="fname" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="" v-model="lname" /><br />
    <label for="age">age:</label><br />
    <input type="text" id="age" name="age" value="" v-model="age" /><br />
    <label for="mobileno">Mobile No.</label><br />
    <input type="number" id="mobileno" v-model="mno" /><br />

    <button @click="save">add table</button>
    <button @click="remove">delete</button>

    <table border="2px solid black" width="500px">
      <tr>
        <th>id</th>
        <th>first name</th>
        <th>last name</th>
        <th>age</th>
        <th>mobile No.</th>
      </tr>
      <tr v-for="students in student" :key="students.id">
        <td>{{ students.id }}</td>
        <td>{{ students.fname }}</td>
        <td>{{ students.lname }}</td>
        <td>{{ students.age }}</td>
        <td>{{ students.mno }}</td>
        <td><button @click="set">update</button></td>
      </tr>
    </table>

    <div
      class="card"
      @click="bluecolor1"
      :style="{ backgroundColor: cardcolor1 }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora?
    </div>
    <div
      class="card"
      @click="bluecolor2"
      :style="{ backgroundColor: cardcolor2 }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora?
    </div>
    <div
      class="card"
      @click="bluecolor3"
      :style="{ backgroundColor: cardcolor3 }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora?
    </div>

    <button @click="btn1" :disabled="someCondition1">one</button>
    <button @click="btn2" :disabled="someCondition2">two</button>
    <button @click="btn3" :disabled="someCondition3">three</button>
    <br />
    <button @click="edittext1" v-text="changetext1"></button>
    <button @click="edittext2" v-text="changetext2"></button>
    <button @click="edittext3" v-text="changetext3"></button>

    <table border="2px solid black" width="200px">
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      <tr v-for="animals in animal" :key="animals.name">
        <td>{{ animals.id }}</td>
        <td @mouseover="hover(animals)" :class="{ row: isrow }">
          {{ animals.name }}
        </td>
      </tr>
    </table>

    <!-- <slot name="header"></slot> -->
    <div slot="header"></div>
    <h1 v-color>hello</h1>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      isrow: false,
      selectedanimal: "",
      bold: "",
      cardcolor1: "",
      cardcolor2: "",
      cardcolor3: "",
      someCondition1: false,
      someCondition2: false,
      someCondition3: false,
      changetext1: "button1",
      changetext2: "button2",
      changetext3: "button3",
      htmlTag: "",
      imgpath: "",
      m: 0,
      n: 0,
      sum: 0,
      a: true,
      i: 0,
      b: "",
      text: "",
      show: true,
      block: "",
      value: "jasmin",
      showvalue: false,
      selectitem: "",
      check: "",
      check1: "",
      rdo: "",
      ftxt: "",
      ltxt: "",
      agetxt: "",
      background: "",
      border1: "",
      star: false,
      bgcolor: "",
      txtcolor: "",
      font: 0,
      fontsize: 10,
      x: 0,
      backcolor: "",
      boxbgcolor: "",
      // display:"block",
      // value:"ok",
      user: [{ name: "jay" }, { name: "jasmin" }, { name: "rahul" }],
      stud: ["aa", "bb", "cc"],

      rowdata: [],
      student: [],
      id: "",
      fname: "",
      lname: "",
      age: "",
      mno: "",
      employee: [
        { id: 1, name: "abc" },
        { id: 2, name: "xyz" },
        { id: 3, name: "sksm" },
        { id: 4, name: "ldddd" },
        { id: 5, name: "mslldod" },
        { id: 6, name: "jkfks" },
      ],
      animal: [
        { id: 1, name: "zibra" },
        { id: 2, name: "dog" },
        { id: 3, name: "bird" },
        { id: 4, name: "cat" },
        { id: 5, name: "cow" },
        { id: 6, name: "horse" },
      ],
    };
  },
  methods: {
    event() {
      this.a = !this.a;
    },
    changebackground() {
      this.backcolor = "lightblue";
    },
    count() {
      this.i += 1;
    },
    hide() {
      this.show = false;
    },
    printvalue() {
      this.showvalue = !this.showvalue;
    },
    add() {
      this.rowdata.push({
        fname: this.ftxt,
        lname: this.ltxt,
        age: this.agetxt,
      });
    },
    addcolor() {
      this.boxbgcolor = "blue";
      this.border1 = "2px solid red";
    },
    starprint(id) {
      this.star = true;
      console.log(id);
    },
    oldcolor() {
      this.boxbgcolor = "green";
    },
    additon() {
      this.sum = parseInt(this.m) + parseInt(this.n);
    },
    fontinc() {
      this.fontsize += 1;
    },
    fontdec() {
      this.fontsize -= 1;
    },
    signalChange(event) {
      this.text = event.target.value;
      console.log(event.target.value);
    },
    save() {
      this.student.push({
        id: this.id,
        fname: this.fname,
        lname: this.lname,
        age: this.age,
        mno: this.mno,
      });
      (this.id = ""),
        (this.fname = ""),
        (this.lname = ""),
        (this.age = ""),
        (this.mno = "");
    },
    remove() {
      this.student.pop();
      
    },
    set() {
      this.student = new Set({
        id: this.id,
        fname: this.fname,
        lname: this.lname,
        age: this.age,
        mno: this.mno,
      });
    },
    bluecolor1() {
      this.cardcolor1 = "blue";
      this.cardcolor2 = "red";
      this.cardcolor3 = "red";
    },
    bluecolor2() {
      this.cardcolor2 = "blue";
      this.cardcolor1 = "red";
      this.cardcolor3 = "red";
    },
    bluecolor3() {
      this.cardcolor3 = "blue";
      this.cardcolor2 = "red";
      this.cardcolor1 = "red";
    },
    btn1() {
      (this.someCondition1 = false),
        (this.someCondition2 = true),
        (this.someCondition3 = true);
    },
    btn2() {
      this.someCondition2 = false;
      this.someCondition1 = true;
      this.someCondition3 = true;
    },
    btn3() {
      (this.someCondition3 = false),
        (this.someCondition1 = true),
        (this.someCondition2 = true);
    },
    edittext1() {
      this.changetext1 = "clicked";
    },
    edittext2() {
      this.changetext2 = "clicked";
    },
    edittext3() {
      this.changetext3 = "clicked";
    },
    hover() {
      // this.selectedanimal = item.id;
      this.isrow = true;
    },
  },
};
</script>
<style>
label {
  font-size: 15px;
}
#box {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
.one-class {
  width: 150px;
  height: 150px;
  border: 2px solid red;
}
.card {
  width: 150px;
  height: 150px;
  border: 2px solid black;
}
.row:hover {
  font-weight: bold;
}
</style>
