<?php

namespace App\Providers;

use App\Modules\Role\Application\Contracts\RoleQueryContract;
use App\Modules\Role\Infrastructure\Repositories\Commands\RoleSharedCommand;
use App\Modules\Role\Infrastructure\Repositories\Queries\RoleQueryRepository;
use App\Modules\Shared\Application\Contracts\AuthContract;
use App\Modules\Shared\Application\Contracts\RoleSharedContract;
use App\Modules\Shared\Infrastructure\Auth\SanctumAuthenticator;
use App\Modules\User\Application\Contracts\UserCommandContract;
use App\Modules\User\Infrastructure\Repositories\Commands\UserCommandRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthContract::class, SanctumAuthenticator::class);
        $this->app->bind(RoleSharedContract::class, RoleSharedCommand::class);
        $this->app->bind(UserCommandContract::class, UserCommandRepository::class);
        $this->app->bind(RoleQueryContract::class, RoleQueryRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
