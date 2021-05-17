<template>
  <div>
      <albums-list @addToCart="addToCart"></albums-list>
      <albums-cart class="cart" :cart="cart" @addToCart="addToCart" @removeFromCart="removeFromCart" @deleteAlbumsFromCart="deleteAlbumsFromCart"></albums-cart>
      <footer>
        Realised By Cédric Marurai
      </footer>
  </div>
</template>

<script>
import AlbumsCart from './Albums-cart.vue'
import AlbumsList from './Albums-list.vue'
export default {
  components: { AlbumsList, AlbumsCart },
  data () {
    return {
      // Centralize all albums in cart
      cart: []
    }
  },

  methods: {
    addToCart(album) {
      // Find the first album
      const albumFound = this.cart.find( cartAlbum => cartAlbum.title == album.title )
      if (albumFound){
        albumFound.quantity++ 
      } else {
        this.cart.push(album)
      }
    },

    removeFromCart(album) {
      const albumToDelete = this.cart.findIndex( cartAlbum => cartAlbum.title == album.title )
      this.cart.splice(albumToDelete, 1)
    },

    deleteAlbumsFromCart(album) {
      this.cart = this.cart.filter( cartAlbum => cartAlbum.title != album.title )
    }

  },

}
</script>

<style scoped>
div {
  background: rgb(47,33,85);
  background: linear-gradient(187deg, rgba(47,33,85,1) 0%, rgba(56,0,204,1) 100%);
}

footer {
  background: white;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.2rem;

}

</style>