<?php

// Inclusion des librairies
	include 'application/bdd_connection.php';

	
$sql = '
	SELECT 
	titre,
	Images,
	langages,
	lienSite
	FROM projet
	
	';

	$query = $pdo->query($sql);
	$projets = $query->fetchAll();














	$template ='index';

include 'layout.phtml';