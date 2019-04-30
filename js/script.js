/*
ĆWICZENIE:
1) Na stronie są trzy linki "Show modal", każdy z inną wartością atrybutu href.
2) W elemencie .overlay znajdują się trzy modale, każdy z innym id.
3) Atrybuty href w linkach odpowiadają atrybutom id modali.
4) Modale domyślnie są ukryte. Aby modal się wyświetlił, musi otrzymać klasę show (tak samo jak overlay).

Twoim zadaniem jest taka modyfikacja funkcji showModal, aby kliknięcie w "Show modal one":

1) Usuwało klasę show ze wszystkich modali,
2) Dodawało klasę show do modala o id="modal-one",
3) Dodawało klasę show do overlaya (to już jest wykonywane w tej funkcji).
4) Oczywiście, ten sam kod ma analogicznie działać dla wszystkich linków, więc "modal-one" w powyższej instrukcji musi być pobierane z atrybutu href linka. Zwróć 	uwagę, że jego wartość zaczyna się od #, czyli możesz użyć całej wartości href jako selektora.
*/
'use strict';
(function(){

	var modals = document.querySelectorAll('.modal');
	var modalLinks = document.querySelectorAll('.show-modal');
	var closeButtons = document.querySelectorAll('.modal .close');

	function getHrefValue(event) {
		//funkcja zwraca wartosc href kliknietego linka
		return event.target.getAttributeNode('href').value;
	}

	function displayModal(id, modals) {
		//funkcja usuwa klase .show ze wszystkich div.modal majacych .show oraz dodaje klase .show tylko do modala o id odpowiadajacemu href kliknietego linka
		var displayedModals = document.querySelectorAll('.show');
		Array.from(displayedModals).forEach(function(modal) {
			modal.classList.remove('show');
		});
		document.querySelector(id).classList.add('show');
	}

	function showModal(event) {
		event.preventDefault();
		var clickedModalId = getHrefValue(event);
		displayModal(clickedModalId, modals);
		document.querySelector('#modal-overlay').classList.add('show');
	}

	function hideModal(event) {
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
		for( var i = 0; i < modals.length; i++) {
			modals[i].classList.remove('show');
		}
	}

	for(var i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener('click', showModal);
	}

	for(var i = 0; i < closeButtons.length; i++) {
		closeButtons[i].addEventListener('click', hideModal);
	}

	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event) {
			event.stopPropagation();
		});
	}

	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

})();
