<template>
  <div class="board">
    <div class="container">
      <form class="form">
        <input type="text" v-model="form.name">
        <textarea v-model="form.description"></textarea>
        <div class="btns">
          <button class="blue" @click.prevent="addCard">Add</button>
          <button class="red" @click.prevent="decline">Decline</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
export default {
  data() {
    return {
      form: {
        name: "New name",
        description: "New description",
      }
    }
  },
  methods: {
    decline() {
      this.$router.push('/')
    },

    addCard() {
      this.$store.commit('ADD_CARD', {
        id: uuid.v1(),
        name: this.form.name,
        description: this.form.description
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    max-width: 450px;
    margin: 40px auto;
    input {
      display: block;
      width: 100%;
      height: 30px;
      border: 1px solid #ced4da;
      padding: 0 10px;
      font: 400 16px/40px $roboto;
    }

    textarea {
      display: block;
      width: 100%;
      min-height: 80px;
      border: 1px solid #ced4da;
      padding: 0 10px;
      font: 400 16px/1.5 $roboto;
      margin-top: 20px;
    }

    button {
      display: block;
      width: 150px;
      height: 40px;
      color: #fff;
      border: none;
      font: 400 16px/40px $roboto;
      text-align: center;
      border-radius: 4px;
      margin-top: 20px;
      cursor: pointer;
      margin-right: 20px;
      transition: all .2;
    }
  }

  .blue {
    background: #1867c0;
    &:hover {
      background: lighten(#1867c0,10%)
    }
  }

  .red {
    background: #ff5252;
    &:hover {
      background: lighten(#ff5252,10%)
    }
  }

  .btns {
    display: flex;
  }

</style>
