<?php

namespace App\Controllers;

use Firebase\JWT\JWT;

class JWTTokenHelper {

    public static function generateJWTToken(string $user_login) {
        $issuedAt = time();

        $payload = [
            'iat' => $issuedAt,
            'exp' => $issuedAt + 60,
            'user_login' => $user_login
        ];

       return JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');
    }

}