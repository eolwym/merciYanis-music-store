<template>
<div>
  <Nav></Nav>
  <router-view></router-view>
</div>
</template>

<script>
import Nav from './components/Navigation/Nav'

export default {
  name: 'App',
    components: {
    Nav
  },
}
</script>

<style>
/* BASE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Mulish', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

/* CLASS */
.btn {
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 0;
  transition: all 0.2s;
  text-transform: uppercase;
  font-weight: 700;
}

.btn:hover {
  transform: scale(1.1);
}

.btn-white {
  background: white;
}

.btn-purple {
  background: #321382;
  color:#eee;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
