function openTab(evt, tabId) {
    // Evita que o clique no botão de fechar propague para a aba
    if (evt.target.classList.contains('close-tab') || evt.target.classList.contains('fa-times')) {
        return;
    }

    // Esconde todos os conteúdos de abas
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a classe 'active' de todas as abas
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona a classe 'active' ao botão
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function closeTab(event, tabId) {
    // Previne que o evento propague para elementos pais
    event.stopPropagation();

    // Encontra a aba e o conteúdo correspondente
    const tabsContainer = document.getElementById('tabsContainer');
    const tabToRemove = Array.from(document.querySelectorAll('.tab')).find(tab =>
        tab.getAttribute('onclick').includes(tabId)
    );
    const contentToRemove = document.getElementById(tabId);

    // Remove os elementos
    if (tabToRemove) tabsContainer.removeChild(tabToRemove);
    if (contentToRemove) contentToRemove.remove();

    // Se a aba fechada era a ativa, ativa a primeira aba disponível
    if (tabToRemove && tabToRemove.classList.contains('active')) {
        const remainingTabs = document.querySelectorAll('.tab');
        if (remainingTabs.length > 0) {
            const firstTab = remainingTabs[0];
            const firstTabId = firstTab.getAttribute('onclick').match(/'([^']+)'/)[1];
            firstTab.click();
        }
    }
}