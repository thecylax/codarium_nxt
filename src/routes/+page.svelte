<style>
    .main {
        display: flex;
        flex: 1 1 auto;
        border: 1px solid red;
        width: 100%;
        min-width: 0;
        height: 100%;
        min-height: 0;
    }

    .background-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.3;
        margin-left: auto;
        background-image: url('/logo-x.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100vw;
        height: 150px;
        /* min-height: 70vh; */
    }
    .background-logo img {
        max-width: 40vw;
        max-height: 40vh;
    }
    .centered-container {
        /* display: flex; */
        /* position: relative; */
        /* justify-content: center; */
        align-items: center;
        /* z-index: 1; */
        /* height: 70vh; */
    }
    .icon-gridX {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    .icon-itemX {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.15s;
        cursor: pointer;
        font-size: 1.1rem;
    }
    .icon-item:hover {
        transform: scale(1.08);
    }
    .icon-svg {
        margin-bottom: 0.5rem;
        width: 48px;
        height: 48px;
    }
</style>

<div class="main">
    <!-- <img src="/logo-x.png" alt="Logo" /> -->
</div>

<!-- <div class="centered-container">
    <div class="icon-grid">
        <div class="icon-item">
            <svg class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" fill="none"/>
                <path d="M16 3v4M8 3v4M3 11h18"/>
            </svg>
            <span>Abrir Projeto</span>
        </div>
        <div class="icon-item">
            <svg class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" fill="none"/>
                <path d="M9 12h6M9 16h6M9 8h6"/>
            </svg>
            <span>Abrir Arquivo</span>
        </div>
        <div class="icon-item">
            <svg class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M12 16v-1M12 8a3 3 0 0 1 3 3c0 1.5-2 2-2 2"/>
            </svg>
            <span>Ajuda</span>
        </div>
    </div>
</div> -->