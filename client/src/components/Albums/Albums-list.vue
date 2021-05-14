<template>
  <section>
    <h2><i class="fas fa-music"></i> ALBUMS</h2>
    <div class="albums-list">
      <article v-for="album in albums" :key="album.artist">
        <img :src="require(`../../assets/${album.coverImg}`)" alt="" width="280" height="280" class="mb-1">

        <h3 class="mb-1">{{album.title}}</h3>
        <p class="mb-1">{{album.artist}}</p>

        <div class="mb-1 stars">
            <i class="fas fa-star" v-for="x in Math.round(album.rating)" :key="x"></i>
            <i class="fas fa-star-half-alt" v-if="!Number.isInteger(Math.round(album.rating*2)/2)"></i>
            <i class="far fa-star" v-for="x in 5-Math.round(album.rating)" :key="x+'empty'"></i>
            <span>{{album.rating}}</span>
        </div>

          <span class="mb-1">{{album.price}} €</span>

        <button @click="addToCart(album)" class="btn btn-purple mb-1">Add to cart</button>

      </article>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      albums: null,
    }
  },

  methods: {
    addToCart(album) {
      this.$emit('addToCart', {...album, quantity: 1})
    }
  },

  // Récupère les données à la création du composant
  created() {
    fetch('http://localhost:8090/getAlbums')
    .then(response => response.json())
    .then(data => this.albums = data.albums)
  }
}

</script>

<style scoped>
h2 {
  color: white;
  padding: 4rem 0;
  letter-spacing: 0.4rem;
}
.fa-music {
  color: #6ccee5;
}
i {
  color: #f39c12;
}

section {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 10rem;
}

img {
  border-radius: 4px;
}

.albums-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

article {
  background: #eee;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  transition: all 0.3s;
}

article:hover {
 box-shadow: #ddd 0px 5px 15px;
}

.stars i {
  padding-right: 1rem;
}

</style>