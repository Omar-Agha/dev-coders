<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'father_name',
        'mother_name',
        'birth_date',
        'avatar',
        'description',
    ];



    protected $appends = [
        'avatar_url',
    ];


    protected function casts(): array
    {
        return [
            'birth_date' => 'datetime',
        ];
    }

    protected function getAvatarUrlAttribute()
    {
        return asset($this->avatar);
    }
}
