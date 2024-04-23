<?php

setcookie(
    "session_id",
    "s_987787t3ydghsadadsaddf342f4sdad98999909",
    time() + 3600
);

$ch = curl_init('node:3000/products');

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    array(
        'Content-Type:application/json'
    )
);
$resposta = json_decode(curl_exec($ch), true);

for ($i = 0; $i < count($resposta); $i++) {
    echo "ID: {$resposta[$i]['id']} <br>";
    echo "Name: {$resposta[$i]['name']} <br>";
    echo "Price: {$resposta[$i]['price']} <br><br>";
}
