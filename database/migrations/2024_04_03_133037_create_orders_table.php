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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date_time');
            $table->foreignId('drink_id')->nullable()->constrained('drinks')->onDelete('set null');
            $table->foreignId('dish_id')->nullable()->constrained('dishes')->onDelete('set null');
            $table->foreignId('table_id')->nullable()->constrained("tables")->onDelete('set null');
            $table->decimal('total', 8, 2);
            $table->foreignId('resto_id')->nullable()->constrained('restos')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
