<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use Product;

class ProductController
{
    private EntityManager $em;

    public function __construct(EntityManager $em) {
        $this->em = $em;
    }

    public function all(Request $request, Response $response, array $args): Response {
        $productRepo = $this->em->getRepository('Product');

        $productsRaw = $productRepo->findAll();
        $products = array();

        foreach($productsRaw as $product) array_push($products, $this->parseProduct($product));

        $response->getBody()->write(json_encode($products));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    private function parseProduct(Product $product): array {
        return [
            'name' => $product->getName(),
            'description' => $product->getDescription(),
            'price' => $product->getPrice()
        ];
    }

}