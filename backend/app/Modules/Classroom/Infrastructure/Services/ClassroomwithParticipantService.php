<?php

namespace App\Modules\Classroom\Infrastructure\Services;

use App\Models\Classroom;
use App\Models\Role;
use App\Modules\Classroom\Application\DTOs\ClassroomWithTotalParticipantsDTO;
use App\Modules\Classroom\Application\DTOs\PaginateClassroomDTO;
use App\Modules\Shared\Application\Services\PaginateClassroomWithParticipantService;
use Carbon\Carbon;

class ClassroomwithParticipantService implements PaginateClassroomWithParticipantService
{
    public function handle(int $currentpage): PaginateClassroomDTO
    {
        $studentRoleId = Role::where('name', 'student')->value('id');

        $classrooms = Classroom::select(['id', 'name', 'created_at'])
            ->withCount(['users as participants' => function ($user) use ($studentRoleId) {
                $user->where('role_id', $studentRoleId);
            }])
            ->paginate(
                perPage: 10,
                page: $currentpage
            );

        return new PaginateClassroomDTO(
            $classrooms->lastPage(),
            range(1, $classrooms->lastPage()),
            $classrooms->currentPage(),
            $classrooms->getCollection()
                ->map(function ($classroom) {
                    return (new ClassroomWithTotalParticipantsDTO(
                        $classroom->id,
                        $classroom->name,
                        $classroom->participants,
                        Carbon::parse($classroom->created_at)->format('d F Y')
                    ))->toJSON();
                })->toArray()
        );
    }
}