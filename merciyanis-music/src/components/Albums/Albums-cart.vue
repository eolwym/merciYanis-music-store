<template>
  <div class="cart">
    <!-- CART LOGO -->
    <div class="cart-resume">
      <i class="fas fa-shopping-cart mb-1" @click="showModal = true"></i>
      <p class="albums-selected-number mb-1">{{numberOfAlbumsInCart}} albums in the Cart</p>
      <div class="total-price-cart">TOTAL: {{totalCart}} €</div>
    </div>
    
    <!-- CART MODAL -->
    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
              <button class="close" @click="showModal=false">X</button>
          </div>

          <div class="modal-body" v-if="cart.length == 0"> Panier vide</div>

          <div v-for="album in cart" :key="album.title" class="cart-item modal-body mb-1">
            <!-- MAKE A TABLE -->
            <div>
              <input type="number" v-model.number="album.quantity" @change="checkInput($event, album)">
            </div>

            <div class="album-title-artist">
              <p class="album-title">{{album.title}}</p>
              <p class="album-artist">{{album.artist}}</p>
            </div>

            <div>
              {{album.price}} €
            </div>
            <div class="delete-album">X</div>
            </div>
          </div>

          <div class="modal-footer">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },

  methods: {
    checkInput($event, album) {
      // Check if the input is a number
      console.log();
      if(isNaN(parseInt($event.target.value))) {
        $event.target.value = 1
        album.quantity = 1
      }
      // Remove album if the input is not positive
      if($event.target.value < 1) {
        this.$emit('removeFromCart', album)
      }
    }
  },

  props: ['cart'],

  computed: {
    totalCart() {
      let total = 0
      this.cart.forEach(data => {
        total += data.price * data.quantity
      })
      return total
    },

    numberOfAlbumsInCart() {
      let nb = 0
      this.cart.forEach(album => {
        nb += parseInt(album.quantity)
      })
      console.log(nb);
      return nb
    }
  }
}
</script>

<style scoped>

.cart-resume {
  position: fixed;
  top: 50%;
  transform: translate(0%, -50%);
  left: 1rem;
  width: 20%;
  background: transparent;
  padding: 1rem;
}

i {
  background: white;
  font-size: 3rem;
  color: #67cce4;
  border: 3px solid #67cce4;
  padding: 2rem;
  border-radius: 50%;
}

i:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.albums-selected-number {
  font-weight: 700;
  color: white;
}

.albums-selected {
  background: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.cart-item {
  display: flex;
  flex: 1 1 0px;
  align-items: center;
  padding: 1rem;
  gap: 4rem;
}

.album-title-artist {
  display:flex;
  flex-direction: column;
}

.album-artist {
  font-style: italic;
}
.album-title {
  font-weight: 700;
}

input {
  text-align: center;
  width: 5rem;
}

.total-price-cart {
  color: white;
  font-weight: 700;
}

button {
  padding: 0.5rem;
}


/* MODAL */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.close {
  float: right;
}
</style>