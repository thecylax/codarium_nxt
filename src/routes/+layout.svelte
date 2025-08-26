<script lang="ts">
	let { children } = $props();

    import { getCurrentWindow } from "@tauri-apps/api/window";

    // when using `"withGlobalTauri": true`, you may use
    // const { getCurrentWindow } = window.__TAURI__.window;

    const appWindow = getCurrentWindow();

    document
        .getElementById("titlebar-minimize")
        ?.addEventListener("click", () => appWindow.minimize());
    document
        .getElementById("titlebar-maximize")
        ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
        .getElementById("titlebar-close")
        ?.addEventListener("click", () => appWindow.close());
</script>

<div class="main">
	<div class="row header">
		<div class="header column column-1-3"></div>
		<div class="header column column-1-3">
			<div class="command">
				<input type="text" placeholder="_>" id="nameField" />
			</div>
		</div>
		<div class="header column column-1-3"></div>
	</div>
	<div class="row main-content">
		<div class="sidebar column column-20">
			<div class="sidebar_menu">Menu</div>
		</div>
		<div class="column column-80">
			{@render children()}
			<!-- ABAS -->
			<!-- <div class="tabs" id="tabsContainer">
				<div class="tab active">
					Aba 1
					<a class="close-tab" href="/" aria-label="Fechar aba">
						<i class="fas fa-times"></i>
					</a>
				</div>
				<div class="tab">
					Aba 2
					<a class="close-tab" href="/" aria-label="Fechar aba">
						<i class="fas fa-times"></i>
					</a>
				</div>
				<div class="tab">
					Aba 3
					<a class="close-tab" href="/" aria-label="Fechar aba">
						<i class="fas fa-times"></i>
					</a>
				</div>
			</div> -->

			<!-- CONTEUDO -->
			<!-- <div id="tab1" class="tab-content active">
				<h3>Conteúdo da Aba 1</h3>
				<p>Este é o conteúdo da primeira aba.</p>
				{@render children()}
			</div>
			<div id="tab2" class="tab-content">
				<h3>Conteúdo da Aba 2</h3>
				<p>Este é o conteúdo da segunda aba.</p>
				asdads asd
			</div>
			<div id="tab3" class="tab-content">
				<h3>Conteúdo da Aba 3</h3>
				<p>Este é o conteúdo da terceira aba.</p>
			</div> -->
		</div>
	</div>
	<div class="row status">
		<div class="status column">
			<div class="status_content">Loading...</div>
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		padding-top: 30px;
		height: 100vh;
	}

	.command {
		padding-top: 10px;
	}

	.close-tab {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.3s;
		margin-left: 5px;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		color: var(--nord4);
		font-size: 12px;
		text-decoration: none;
	}
	.close-tab:hover {
		background-color: var(--nord1);
		color: var(--nord13);
	}

	.tabs {
		display: flex;
		border-bottom: 1px solid var(--nord3);
	}
	.tab {
		display: flex;
		position: relative;
		align-items: center;
		cursor: pointer;
		margin-right: 5px;
		border: 1px solid transparent;
		border-bottom: none;
		background-color: var(--nord2);
		padding: 3px 10px 3px 10px;
	}
	.tab.active {
		margin-bottom: -1px;
		border-bottom: none;
		border-color: var(--nord3);
		background-color: var(--nord3);
		font-weight: bold;
	}
	.tab-content {
		display: none;
		border: 1px solid var(--nord3);
		border-top: none;
		background-color: var(--nord3);
		padding: 20px;
	}
	.tab-content.active {
		display: block;
	}

	.header {
		border-bottom: 1px solid var(--nord3);
		background-color: var(--nord1);
		height: 50px;
		min-height: 50px;
		max-height: 50px;
	}

	.sidebar {
		border-right: 1px solid var(--nord3);
		background-color: var(--nord0);
		min-width: 120px;
		/* min-height: 400px; */
	}

	.status {
		border-top: 1px solid var(--nord3);
		background-color: var(--nord1);
		height: 30px;
		min-height: 30px;
		max-height: 30px;
	}

	.status_content {
		padding: 5px 0 5px 0px;
		color: var(--nord4);
	}

	.row.main-content {
		display: flex;
		flex: 1 1 auto;
		background-color: var(--nord1);
		min-height: 0;
	}

	input {
		border-color: var(--nord3) !important;
		background-color: var(--nord2) !important;
		height: 30px !important;
		color: var(--nord4);
	}

	input:hover {
		background-color: var(--nord3) !important;
	}

	input:focus {
		outline: none;
		border-color: var(--nord8) !important;
	}
</style>
