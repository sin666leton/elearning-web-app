<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UnauthOnlyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth('sanctum')->check()) {
            return response()->json([
                'error' => [
                    'message' => 'Anda sudah login'
                ],
                'code' => 'ALREADY_LOGIN'
            ], 403);
        }

        return $next($request);
    }
}
