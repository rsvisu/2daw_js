document.addEventListener('DOMContentLoaded', () => {
    // - Captura (el evento baja desde el elemento más externo hacia el más interno)
    // Abuelo
    document.querySelector('#captura .abuelo').addEventListener('click',
        () => alert('abuelo'), true);
    // Padre
    document.querySelector('#captura .padre').addEventListener('click',
        () => alert('padre'), true);
    // Hijo
    document.querySelector('#captura .hijo').addEventListener('click',
        () => alert('hijo'), true);

    // - Burbujeo (es el por defecto) (el evento sube desde el elemento más interno hacia el más externo)
    // Abuelo
    document.querySelector('#burbujeo .abuelo').addEventListener('click',
        () => alert('abuelo'), false);
    // Padre
    document.querySelector('#burbujeo .padre').addEventListener('click',
        () => alert('padre'), false);
    // Hijo
    document.querySelector('#burbujeo .hijo').addEventListener('click',
        () => alert('hijo'), false);

    // - Mixto
    // Abuelo
    document.querySelector('#mixto .abuelo').addEventListener('click',
        () => alert('abuelo'), true);
    // Padre
    document.querySelector('#mixto .padre').addEventListener('click',
        () => alert('padre'), false);
    // Hijo
    document.querySelector('#mixto .hijo').addEventListener('click',
        () => alert('hijo'), false);

    // - Mixto
    // Abuelo
    document.querySelector('#stop .abuelo').addEventListener('click',
        () => alert('abuelo'), false);
    // Padre
    document.querySelector('#stop .padre').addEventListener('click',
        (event) => {
        alert('padre');
        event.stopPropagation();
        }, false);
    // Hijo
    document.querySelector('#stop .hijo').addEventListener('click',
        () => alert('hijo'), false);
});