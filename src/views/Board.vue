<template>
  <div class="board">
    <div class="container">
      <div class="nav">
        <button class="btn" @click="addCard">Add card</button>
        <div class="checkbox">
          <input type="checkbox" id="chk" v-model="isChecked">
          <label for="chk">Disable drag&drop</label>
        </div>
      </div>
      <draggable :list="board.data" class="row cards" @change="updateBoard" :options="{disabled: isChecked}">
        <div class="col" v-for="(card, idx) in board.data" :key="idx">
          <div class="card" @click="editCard(card)">
            <div class="card__name">{{ card.name }}</div>
            <div class="card__description">{{ card.description }}</div>
          </div>
        </div>
      </draggable>
    </div>
    <Modal v-if="isModal" :card="card"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { EventBus } from '../main.js'
import draggable from 'vuedraggable'
import Modal from '@/components/Modal'
export default {
  data() {
    return {
      isChecked: false,
      isModal: false,
      card: null
    }
  },

  computed: {
    ...mapState({
      board: state => state.board.board
    })
  },

  methods: {
    addCard() {
      this.$router.push('/create')
    },

    updateBoard() {
      this.$store.commit('UPDATE_BOARD', this.board)
    },

    editCard(card) {
      this.isModal = true
      this.card = card
    }
  },

  created() {
    EventBus.$on("close", (val) => {
      this.isModal = val.isModal
    })
  },

  components: {
    draggable,
    Modal
  }
}
</script>

<style lang="scss" scoped>
  .board {
    padding-top: 40px;
  }

  .col {
    width: 25%;
    @include display-less(tablet) {
      width: 50%;
    }
    @include display-less(smart) {
      width: 100%;
    }
  }

  .cards {
    padding-top: 20px;
  }

  .card {
    height: 150px;
    overflow: hidden;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    margin-bottom: 30px;
    padding: 15px;

    &__name {
      font: 500 20px/1.5 $roboto;
    }

    &__description {
      font: 400 14px/1.5 $roboto;
    }
  }

  .btn {
    display: block;
    border: none;
    background: #1867c0;
    height: 30px;
    width: 120px;
    font: 400 16px/30px $roboto;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: lighten(#1867c0, 10%)
    }
  }

  .checkbox {
    text-align: left;
    margin-top: 15px;
  }

</style>
