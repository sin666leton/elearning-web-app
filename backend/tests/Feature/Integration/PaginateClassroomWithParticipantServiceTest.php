<?php

namespace Tests\Feature\Integration;

use App\Models\Classroom;
use App\Models\Role;
use App\Models\User;
use App\Modules\Classroom\Application\DTOs\PaginateClassroomDTO;
use App\Modules\Shared\Application\Services\PaginateClassroomWithParticipantService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('classroom')]
#[Group('paginate-classroom')]
class PaginateClassroomWithParticipantServiceTest extends TestCase
{
    use RefreshDatabase;

    private PaginateClassroomWithParticipantService $service;
    
    protected function setUp(): void
    {
        parent::setUp();

        $this->service = $this->app->make(PaginateClassroomWithParticipantService::class);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    #[Group('current')]
    public function test_should_return_Paginate_Classroom_DTO()
    {
        $role = Role::factory()->createOne();
        $classroom = Classroom::factory()->createOne();
        $classroom2 = Classroom::factory()->createOne();
        $dummy = [$classroom, $classroom2];

        User::factory()
            ->for($role)
            ->for($classroom)
            ->count(10)
            ->create();

        User::factory()
            ->for($role)
            ->for($classroom2)
            ->count(20)
            ->create();

        $res = $this->service->handle(1);

        $this->assertInstanceOf(PaginateClassroomDTO::class, $res);
        $this->assertEquals(1, $res->lastPage);
        $this->assertCount(1, $res->pages);
        $this->assertEquals(1, $res->currentPage);

        for ($i=0; $i < count($dummy); $i++) { 
            $this->assertEquals($dummy[$i]->id, $res->classrooms[$i]['id']);
            $this->assertEquals($dummy[$i]->name, $res->classrooms[$i]['name']);
            $this->assertEquals($dummy[$i]->participants, $res->classrooms[$i]['participants']);
            $this->assertNotNull($res->classrooms[$i]['createdAt']);
        }
    }
}
