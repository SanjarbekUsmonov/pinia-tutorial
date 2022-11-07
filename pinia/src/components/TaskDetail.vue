<template>
    <div>
        <div class="task">
            <h3>{{task.title}}</h3>
            <h3>{{task.counter}}</h3>
            <div class="icons">
                <button>x</button>
                <button>L</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["task"]
    }
</script>

<style >

</style>