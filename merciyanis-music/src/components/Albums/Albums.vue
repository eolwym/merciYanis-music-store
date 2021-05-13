<template>
  <div>
      <albums-list @addToCart="addToCart"></albums-list>
      <albums-cart class="cart" :cart="cart" @addToCart="addToCart" @removeFromCart="removeFromCart"></albums-cart>
  </div>
</template>

<script>
import AlbumsCart from './Albums-cart.vue'
import AlbumsList from './Albums-list.vue'
export default {
  components: { AlbumsList, AlbumsCart },
  data () {
    return {
      // Centralize all album in cart
      cart: []
    }
  },
  methods: {
    addToCart(album) {
      const albumIndex = this.cart.findIndex( (cartAlbum) => album.title == cartAlbum.title)
      if (albumIndex == -1){
        this.cart.push(album)
      } else {
        this.cart[albumIndex].quantity++
      }
    },
    removeFromCart(album) {
      const albumToDelete = this.cart.findIndex( (elem) => {return elem.title == album.title})
      this.cart.splice(albumToDelete, 1)
    }
  },

}
</script>

<style scoped>
div {
background: rgb(47,33,85);
background: linear-gradient(187deg, rgba(47,33,85,1) 0%, rgba(56,0,204,1) 100%);
}
</style>