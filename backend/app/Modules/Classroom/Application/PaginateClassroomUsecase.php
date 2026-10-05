<?php

namespace App\Modules\Classroom\Application;

use App\Modules\Shared\Application\Services\PaginateClassroomWithParticipantService;

class PaginateClassroomUsecase
{
    public function __construct(
        private PaginateClassroomWithParticipantService $service
    ) {}

    public function handle(int $page)
    {
        return $this->service->handle($page);
    }
}