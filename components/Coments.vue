<template>
    <div class="p-2">
        <h3>Comentarios</h3>
    </div>
</template>
  
  
<script>
export default {
    mounted() {
        const scriptTag = document.createElement('SCRIPT')
        scriptTag.setAttribute('src', 'https://utteranc.es/client.js')
        scriptTag.setAttribute('repo', 'RodrigoACR/Tarea04')
        scriptTag.setAttribute('issue-term', 'pathname')
        scriptTag.setAttribute('label', 'Comment')
        scriptTag.setAttribute('theme', 'boxy-light')
        scriptTag.setAttribute('crossorigin', 'anonymous')
        scriptTag.setAttribute('async', 'async')
        this.$el.append(scriptTag)
    },
}
</script>
  
<style>
.utterances {
    width: 100%;
    margin: 0 !important;
    max-width: 100%;
}
</style>