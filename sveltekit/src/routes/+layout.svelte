<script>
    import "./bulma.min.css"
    import Header from "./Header.svelte";

</script>




<section>
    <Header />
    <div class="container">
        
        <slot />
    </div>
</section>