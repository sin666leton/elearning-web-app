<?php

namespace App\Modules\Classroom\Application\DTOs;

class PaginateClassroomDTO
{
    public function __construct(
        public readonly int $lastPage,
        public readonly array $pages,
        public readonly int $currentPage,
        public readonly array $classrooms
    ) {}

    public function toJSON()
    {
        return [
            'data' => $this->classrooms,
            'metadata' => [
                'lastPage' => $this->lastPage,
                'currentPage' => $this->currentPage,
                'pages' => $this->pages
            ]
        ];
    }
}