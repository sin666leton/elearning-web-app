<?php

namespace App\Models;

use Database\Factories\ClassroomFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name'])]
class Classroom extends Model
{
    /** @use HasFactory<ClassroomFactory> */
    use HasFactory;

    protected $table = 'classrooms';

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
