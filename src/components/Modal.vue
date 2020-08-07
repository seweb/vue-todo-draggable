<template>
  <div class="modal">
    <div class="modal-body">
      <span class="close" @click="closeModal">x</span>
      <form class="modal-form">
        <input type="text" v-model="form.name">
        <textarea v-model="form.description"></textarea>
        <button @click.prevent="editCard">Save</button>
      </form>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
  import { EventBus } from '../main.js'

  export default {
    props: ['card'],
    data(){
      return {
        form: {
          name: this.card.name,
          description: this.card.description,
        }
      }
    },

    methods: {
      editCard() {
        this.$store.commit('EDIT_CARD', {
          'id': this.card.id,
          'name': this.form.name, 
          'description': this.form.description
        })
        EventBus.$emit("close", {'isModal': false})
      },

      closeModal() {
        EventBus.$emit("close", {'isModal': false})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .overlay {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0, .3);
    z-index: 100;
    overflow: hidden;
  }

  .modal-body {
    width: 500px;
    min-height: 300px;
    background: #fff;
    z-index: 1000;
    position: fixed;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 40px;
  }

  .modal-form {
    margin-top: 40px;
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
      background: #1867c0;
      color: #fff;
      border: none;
      font: 400 16px/40px $roboto;
      text-align: center;
      border-radius: 4px;
      margin-top: 20px;
      cursor: pointer;
    }
  }

  .close {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;

  }
</style>


