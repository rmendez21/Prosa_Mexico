<?php
$dbhost = 'localhost';
$dbuser = 'dbuser';
$dbpass = 'dbpassword';
$database = 'dbpruebas';
$comm = mysqli_connect($dbhost, $dbuser, $database);
if (! $comm )
	{
		die('nose puede conectar a la base de datos :' . mysql_error());	
	}