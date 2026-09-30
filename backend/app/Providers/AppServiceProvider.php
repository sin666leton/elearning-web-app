<?php

namespace App\Providers;

use App\Modules\Shared\Application\Contracts\AuthContract;
use App\Modules\Shared\Infrastructure\Auth\SanctumAuthenticator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthContract::class, SanctumAuthenticator::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
