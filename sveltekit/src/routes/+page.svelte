<script>
    export let data;
    import ShipList from "./ShipList.svelte";
</script>

<h1>Welcome to PocketSvelte</h1>
<p class="mb-4">Let's learn Sveltekit and Pocketbase together</p>

<ShipList ships={data.ships}/>


<!-- 
<ul>
    {#each data.ships as ship}
        <li>{ship.name} - {ship.type}</li>
    
    {/each}
</ul>

-->
