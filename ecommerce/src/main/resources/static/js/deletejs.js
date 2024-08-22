document.addEventListener("DOMContentLoaded", function() {
            var deleteButton = document.getElementById("confirmDeleteButton");
            var productIdToDelete;

            $('#confirmDeleteModal').on('show.bs.modal', function(event) {
                var button = $(event.relatedTarget); // Pulsante che ha attivato la modale
                productIdToDelete = button.data('id'); // Estrai l'id del prodotto dal data-id
            });

            deleteButton.addEventListener("click", function() {
                window.location.href = "/products/delete/" + productIdToDelete;
            });
        });