 // Funzione per capitalizzare la prima lettera di ogni campo
        function capitalizeFirstLetter() {
            document.querySelectorAll('input[type="text"], textarea').forEach((element) => {
                element.addEventListener('input', function() {
                    // Capitalizza solo la prima lettera della frase
                    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
                });
            });
        }

        // Richiama la funzione quando il DOM è pronto
        document.addEventListener('DOMContentLoaded', capitalizeFirstLetter);
		
		
     //Funzione immagini   
     function updateImagePreview() {
    const imageUrl = document.getElementById('productImageUrl').value;
    const imagePreview = document.getElementById('imagePreview');

    // Se l'URL è valido, mostra l'immagine
    if (imageUrl) {
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';
    } else {
        // Se l'URL è vuoto o non valido, nascondi l'immagine
        imagePreview.style.display = 'none';
    }
}