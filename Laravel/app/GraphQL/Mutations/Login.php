<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

final class Login
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $user = User::where("email", $args["email"])->first();

        //check password
        if (!$user || !Hash::check($args["password"], $user->password)) {
            throw ValidationException::withMessages([
                "email" => "The provided credential is incorrect!"
            ]);
        }

        $token = $user->createToken($args["device"])->plainTextToken;

        return $token;
    }
}
