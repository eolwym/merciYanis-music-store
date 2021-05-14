<template>
  <div class="cart">
    <!-- CART LOGO -->
    <div class="cart-resume">
      <i class="fas fa-shopping-cart mb-1 cart-logo" @click="showModal = true"></i>
      <p class="albums-count mb-1">{{numberOfAlbumsInCart}} albums in the Cart</p>
      <div class="total-price-cart">TOTAL: {{totalCart}} €</div>
    </div>
    
    <!-- CART MODAL -->
    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper" @click="showModal=false">
        <div class="modal-container" @click.stop>

          <i class="far fa-times-circle close mb-1" @click="showModal=false"></i>

          <div v-if="cart.length == 0"> Panier vide</div>
          <!-- TABLE -->
          <div  v-else class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Cover</th>
                  <th>Album / Artist</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="album in cart" :key="album.title" class="cart-item modal-body mb-1">
                  <td><input type="number" step="1" v-model.number="album.quantity" @change="checkInput($event, album)"></td>
                  <td><img :src="require(`../../assets/${album.coverImg}`)" alt="" width="100" height="100" class="mb-1"></td>
                  <td>
                    <p class="album-title">{{album.title}}</p>
                    <p class="album-artist">{{album.artist}}</p>
                  </td>
                  <td>{{album.price}} €</td>
                  <td><span class="delete" @click="deleteAlbumsFromCart(album)">X</span></td>
                </tr>
              </tbody>

            </table>
          </div>
          

          <!-- TOTAL & BTN -->
          <div class="total-price">TOTAL: {{totalCart}} €</div>
          <button class="buy btn btn-purple">Acheter</button>

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
      if(isNaN(parseInt($event.target.value))) {
        $event.target.value = 1
        album.quantity = 1
      }

      // Remove album if the input is not positive
      if($event.target.value < 1) {
        this.$emit('removeFromCart', album)
      }

      // Convert decimal in Integer
      $event.target.value = Math.floor($event.target.value)
      album.quantity = Math.floor($event.target.value)
    },

    deleteAlbumsFromCart(album) {
      this.$emit('deleteAlbumsFromCart', album)
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
    },
  }
}
</script>

<style scoped>
/* LOGO */
.cart-resume {
  position: fixed;
  bottom: 0rem;
  right: 1rem;
  transform: translate(0%, -50%);
  padding: 1rem;
  text-align: center;
}

.cart-logo {
  background: white;
  font-size: 2rem;
  color: #67cce4;
  border: 3px solid #67cce4;
  padding: 2rem;
  border-radius: 50%;
}

i:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.albums-count {
  font-weight: 700;
  color: white;
}

.total-price-cart {
  color: white;
  font-weight: 700;
}

/* TABLE */
.table-container {
  overflow: auto;
  width: 100%;
}

table {
  padding-top: 1rem;
  width: 100%;
  text-align: center;
}

input {
  text-align: center;
}

.album-title {
  font-weight: 700;
}

.album-artist {
  font-style: italic;
}

.delete {
  font-size: 3rem;
  cursor: pointer;
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
  max-height: 80rem;
  margin: 0px auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.close {
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  justify-content: flex-end;
}

.close:hover {
  transform: scale(1.1);
}

.total-price {
  margin: 2rem 0;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.3rem;
}
</style>