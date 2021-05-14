<template>
    <div class="home-container">
        <h1>Catchy And Funny </h1>
        <transition name="bounce">
            <div v-show="showCredits" class="author">Realised by Cédric Marurai</div>
        </transition>
        <div class="actions">
            <div class="credits">
                <button @click="displayAuthor" class="btn btn-white mb-1">Credits</button>
            </div>
            <div class="purchase-albums">
                <a href="/purchase-albums" class="btn btn-white">Purchase an album</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCredits: false
        }
    },
    methods: {
        displayAuthor() {
            this.showCredits = !this.showCredits
        }
    }
}
</script>

<style scoped>
.home-container {
    background: url("../../assets/home-cover.jpg") center/cover;
    height: 90vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;    
}

h1 {
    font-size: 7rem;
    font-weight: 700;
    color: white;
    padding: 15rem 0 10rem 0;
    letter-spacing: 0.5rem;
}

.actions {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5rem 0;
}

.credits {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

.author {
    font-size: 5rem;
    position: absolute;
    color: white;
    width: 80%;
    left: 10%;
    text-align: center;
    bottom:30%;
}

.purchase-albums {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* TRANSITION */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>