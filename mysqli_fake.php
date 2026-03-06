<?php

if (!function_exists('mysqli_connect')) {

function mysqli_connect($host,$user,$pass,$db){ return false; }
function mysqli_query(){ return false; }
function mysqli_fetch_assoc(){ return false; }
function mysqli_fetch_array(){ return false; }
function mysqli_num_rows(){ return 0; }
function mysqli_report(){ return true; }

}

?>