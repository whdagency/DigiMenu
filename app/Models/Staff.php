<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $table = 'staffs'; 
    protected $fillable = ['first_name', 'last_name', 'email', 'password', 'phone', 'image', 'username', 'role_id', 'resto_id' ];
    public function resto() {
        return $this->belongsTo(Resto::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }
}
