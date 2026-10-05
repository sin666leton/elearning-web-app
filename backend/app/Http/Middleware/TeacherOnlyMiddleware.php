<?php

namespace App\Http\Middleware;

use App\Modules\Shared\Exceptions\ForbiddenRoleException;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TeacherOnlyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user->role->name != 'guru') throw new ForbiddenRoleException();

        return $next($request);
    }
}
