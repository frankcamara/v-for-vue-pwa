<template>
  <div>
    <h1>About</h1>
    <p>{{description}}</p>
    <p><b>@author:</b> {{author.name}}</p>
    <p><b>@version:</b> {{version}}</p>
  </div>
</template>

<script>
export default {
  name: 'aboutPage',
  data() {
    return {
      version: '1.0.0',
      author: {
        name: 'Frank Camara',
        title: 'Developer'
      },
      description: `yada yada yada
        lkjasldjlaksjdlksadjlsakdjsadlksaj
        lkjasldjlaksjdlksadjlsakdjsadlksaj
        lkjasldjlaksjdlksadjlsakdjsadlksaj
        lkjasldjlaksjdlksadjlsakdjsadlksaj
        lkjasldjlaksjdlksadjlsakdjsadlksaj
      `
    }
  }
}
</script>

<style>
</style>
