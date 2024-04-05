<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Resto extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'slug', 'user_id'];

    protected static function boot()
    {
        parent::boot();

        // Listen for the creating event of the model
        static::creating(function ($resto) {
            // If the slug is not explicitly provided, generate it from the name
            if (empty($resto->slug)) {
                $resto->slug = Str::slug($resto->name, '-');
            }
        });
    }

    
    public function categorie() {
        return $this->hasMany(Categorie::class);
    }

    public function staff() {
        return $this->hasMany(Staff::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
