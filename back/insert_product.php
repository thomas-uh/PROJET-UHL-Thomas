<?php
// create_product.php <name>
require_once "bootstrap.php";

$mercury = new Product();
$mercury->setName("Mercure");
$mercury->setDescription("Planète plutôt petite ... Au premier rang ... Planète qui a donné son nom au dieu Mercure dans la mythologie romaine (aka. Hermès dans la mythologie grecque) ... Que dire de plus à part que c'est le feu là bas !");
$mercury->setPrice(499);

$entityManager->persist($mercury);
$entityManager->flush();