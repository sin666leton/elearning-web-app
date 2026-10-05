<?php

namespace App\Modules\Classroom\Application\DTOs;

class ClassroomWithTotalParticipantsDTO
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly int $participants,
        public readonly string $createdAt
    ) {}

    public function toJSON()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'participants' => $this->participants,
            'createdAt' => $this->createdAt
        ];
    }
}