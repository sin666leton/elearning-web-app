<?php

namespace Tests\Feature\E2E;

use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Laravel\Sanctum\Sanctum;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('login')]
class AuthRouteTest extends TestCase
{
    use RefreshDatabase;

    private function createUser()
    {
        return User::factory()
            ->state([
                'email' => 'example@mail.com',
                'password' => '12345'
            ])
            ->for(Role::factory()->createOne())
            ->createOne();
    }

    protected function setUp(): void
    {
        parent::setUp();
    }

    public function test_login_should_return_401_when_invalid_credential()
    {
        $res = $this->postJson('/api/v1/login', [
            'email' => 'abcd@mail.com',
            'password' => '1234'
        ]);

        $res->assertStatus(401)
            ->assertJson([
                'error' => [
                    'message' => 'Email atau password salah'
                ],
                'code' => 'INVALID_CREDENTIAL'
            ]);
    }

    public function test_login_should_return_422_when_invalid_input()
    {
        $res = $this->postJson('/api/v1/login', [
            'email' => 'ea',
            'password' => ''
        ]);

        $res->assertStatus(422)
            ->assertJson([
                'error' => [
                    'email' => 'Email tidak valid',
                    'password' => 'Password tidak boleh kosong'
                ],
                'code' => 'VALIDATION_ERROR'
            ]);

    }

    public function test_login_should_return_403_when_already_authenticated()
    {
        $user = $this->createUser();
        Sanctum::actingAs($user);

        $res = $this->postJson('/api/v1/login', [
            'email' => $user->email,
            'password' => '12345'
        ]);

        $res->assertStatus(403)
            ->assertJson([
                'error' => [
                    'message' => 'Anda sudah login'
                ],
                'code' => 'ALREADY_LOGIN'
            ]);
    }

    public function test_login_should_return_200()
    {
        $user = $this->createUser();

        $res = $this->postJson('/api/v1/login', [
            'email' => $user->email,
            'password' => '12345'
        ]);

        $res->assertStatus(200)
            ->assertJson(function (AssertableJson $json) use (&$user) {
                $json->has('data.token');
                $json->has('data.user.id');

                $json->whereType('data.token', 'string');
                $json->whereType('data.user.id', 'integer');

                $json->where('data.user.name', $user->name);
                $json->where('data.user.email', 'e*****e@mail.com');
                $json->where('data.user.role', $user->role->name);
            });
    }
}
