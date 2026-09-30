<?php

namespace Tests\Unit;

use App\Modules\Shared\Utils\HideEmail;
use PHPUnit\Framework\Attributes\Group;
use PHPUnit\Framework\TestCase;

#[Group('login')]
class HideEmailTest extends TestCase
{
    public function test_transform_should_censor_email()
    {
        $res = HideEmail::transform("example@mail.com");

        $this->assertEquals('e*****e@mail.com', $res);
    }
}
