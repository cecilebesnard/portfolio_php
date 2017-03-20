'use strict';

function onClickSearch()

{

	$('#resultat').empty();
	$('#rues').empty();
	$('h3').empty();



	var recherche = $('#recherche').val();

	var titrerecherche = $('h3').append('Recherche sur : '+recherche);
	$(titrerecherche).fadeIn('slow');


	$.getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q='+recherche+'&facet=typvoie&facet=date_arret&facet=quartier&facet=arron',
		function(data)
			{
			
					$('#resultat').append(
						data.records[0].fields.histo,
						data.records[1].fields.histo,
						data.records[2].fields.histo
						);
				
			}	

		);

	$('#recherche').val('');


}

function onClickArea()
{
	
	$('#rues').empty();
	$('#resultat').empty();
	$('h3').empty();

	var recherche = $("#arrondissement").val();
	console.log(recherche);

	$.getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&rows=1000&facet=typvoie&facet=date_arret&facet=quartier&facet=arron&refine.arron=' +recherche, 
		function(data)
		{
			
			

			for (var i = 0; i < data.records.length; i++) 
			{
				
				if(i == data.records.length-1 )
				{
					
					$('#rues').append(
					'<p>'+data.records[i].fields.typo +'.'+'</p>'
					);
				}

				else
				{
					
					$('#rues').append(
						'<p>'+data.records[i].fields.typo +' , '+'</p>'
						);
				}

			}



		}




	 );

	
}


$('#search').on('click' , onClickSearch);
$('#area').on('click' , onClickArea);
