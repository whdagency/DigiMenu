<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('drinks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('desc')->nullable();
            $table->string('image')->nullable();
            $table->decimal('price', 8, 2);
            $table->boolean('visibility')->default(true);
            $table->foreignId('category_id')->constrained('roles')->onDelete('cascade');
            $table->foreignId('resto_id')->nullable()->constrained('restos')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drinks');
    }
};
