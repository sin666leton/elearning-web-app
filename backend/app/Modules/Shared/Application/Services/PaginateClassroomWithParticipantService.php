<?php

namespace App\Modules\Shared\Application\Services;

use App\Modules\Classroom\Application\DTOs\ClassroomWithTotalParticipantsDTO;
use App\Modules\Classroom\Application\DTOs\PaginateClassroomDTO;

interface PaginateClassroomWithParticipantService
{
    public function handle(int $currentPage): PaginateClassroomDTO;
}