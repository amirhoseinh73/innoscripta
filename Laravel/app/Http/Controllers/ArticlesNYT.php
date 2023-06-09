<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticlesNYT extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $endpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" . env("TOKEN_NYT");
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', $endpoint);

        $statusCode = $response->getStatusCode();
        $content = $response->getBody();

        $content = json_decode($content, true);

        return [
            "status" => $content["status"],
            "response" => $content["response"]
        ];
    }
}
