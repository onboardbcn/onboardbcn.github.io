/* JS Scripts */
$(document).ready(function() {

	// Animación cambio de imagen icono pdf
	$('.pdf-icon').hover(function() {
	  	$('.pdf-icon img').attr('src', 'image/pdf-hover.png');
	}, function() {
	  	$('.pdf-icon img').attr('src', 'image/pdf.png');
	});

	// Animación cambio de imagen icono pdf en catalán
	$('.pdf-icon-cat').hover(function() {
	  	$('.pdf-icon-cat img').attr('src', '../image/pdf-hover.png');
	}, function() {
	  	$('.pdf-icon-cat img').attr('src', '../image/pdf.png');
	});

	const consoleFunction = () => {
		console.clear();
		console.info("%cOn Board BCN Academy", "font-size: 14px; color: #ffffff; background: #223d5e; background: linear-gradient(90deg,rgba(34, 61, 94, 1) 0%, rgba(48, 148, 195, 1) 100%); padding: 4px 8px; font-weight: bold;");
		console.info("%cPNB - Patrón de Navegación Básica", "color: #ffffff; background-color: #223d5e; padding: 4px 8px;");
		console.info("%cPER - Patrón de Embarcaciones de Recreo", "color: #ffffff; background-color: #223d5e; padding: 4px 8px;");
		console.info("%cHabilitación a Vela", "color: #ffffff; background-color: #f6b242; padding: 4px 8px;");
		console.info("%cHabilitación a Islas Baleares", "color: #ffffff; background-color: #f6b242; padding: 4px 8px;");
		console.info("%cHabilitación a Vela + Islas Baleares", "color: #ffffff; background-color: #f6b242; padding: 4px 8px;");
		console.info("%cClases Particulares de PNB / PER", "color: #ffffff; background-color: #04aa6d; padding: 4px 8px;");
		console.info("%cInscripción examen teórico PNB", "color: #ffffff; background-color: #223d5e; padding: 4px 8px;");
		console.info("%cInscripción examen teórico PER", "color: #ffffff; background-color: #223d5e; padding: 4px 8px;");
		console.info("%cTitulaciones Náuticas", "color: #ffffff; background-color: #3094c3; padding: 4px 8px;");
		console.info("%cCalendario de Exámenes Náuticos", "color: #ffffff; background-color: #3094c3; padding: 4px 8px;");
		console.info("%cConsulta de Notas y Revisiones", "color: #ffffff; background-color: #3094c3; padding: 4px 8px;");
		console.info("%cSoluciones de los Exámenes", "color: #ffffff; background-color: #3094c3; padding: 4px 8px;");
		console.info("%cJuegos y Simuladores Náuticos", "color: #ffffff; background-color: #f6b242; padding: 4px 8px;");
		console.info("%cSimuladores de Aviación", "color: #ffffff; background-color: #04aa6d ; padding: 4px 8px;");
	}

	setInterval(consoleFunction, 1000);
	
});

/* Any actual al peu (abans ho feia PHP) */
document.querySelectorAll(".any-actual").forEach(function (element) {
	element.textContent = new Date().getFullYear();
});
