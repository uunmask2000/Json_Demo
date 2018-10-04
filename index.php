<?php
include "curlFunction.php";

$curl = new curlFunction();

$res = $curl->curl_get('http://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json');
$res = preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $res);
$json = json_decode($res, true);
var_dump($json);
// echo $res;
// $file = 'XMLReleaseALL_public.json';
// file_put_contents($file, $res);
