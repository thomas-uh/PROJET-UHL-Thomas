<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use Product;

class ProductHelper
{
    private EntityManager $em;

    public function __construct(EntityManager $em) {
        $this->em = $em;
    }

    public function stringifyProduct(Product $product): array {
        return [
            'name' => $product->getName(),
            'description' => $product->getDescription(),
            'price' => $product->getPrice()
        ];
    }

    public function parseProducts(array $products ): array {
        $result = [];
        
        foreach($products as $product) {
            $p = $this->getProductByName($product['name'] ?? "");

            if ($p == null) continue;

            $quantity = $product["quantity"] ?? 0;

            for($i = 0; $i < $quantity; $i++) array_push($result, $p);            
        }

        return $result;
    }

    public function getProductByName(string $productName): ?Product {
        $productRepo = $this->em->getRepository('Product');
        $product = $productRepo->findOneBy([
            'name' => $productName,
        ]);

        return $product;
    }

}