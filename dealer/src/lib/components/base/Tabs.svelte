<script>
	export let data = {};
  console.log(data)
	$: tabs = data.tabs;
	$: activeTab = data.activeTab ?? 0;
</script>

{#each tabs as tab, i}
	<button class="tab" class:active={i === activeTab} on:click={() => (activeTab = i)}>
		{tab.name}
	</button>
{/each}

{#each tabs as tab, i}
	{#if i === activeTab}
		<svelte:component this={tab.content} />
	{/if}
{/each}

<style lang="postcss">
	.tab {
		background-color: #f4f4f5;
		padding: 1rem;
	}
	.tab.active {
		background-color: #e4e4e7;
	}
</style>