<script>

    export let ships;

</script>
<h2 class="is-size-4 has-text-info">Ships available</h2>
<table class="table">
    <thead>
      <tr>
        <th class="has-text-info">Name</th>
        <th class="has-text-info">Type</th>
        <th class="has-text-info">Class</th>
        <th class="has-text-info">Race</th>
        <th class="has-text-info">XP Level</th>
      </tr>
    </thead>
    
    <tbody>
        {#each ships as ship}
            <tr>
                <td>{ship.name}</td>
                <td>{ship.type}</td>
                <td>{ship.class}</td>
                <td>{ship.race}</td>
                <td>{ship.exp_level}</td>
            </tr>
        {/each}
        
    </tbody>
  </table>