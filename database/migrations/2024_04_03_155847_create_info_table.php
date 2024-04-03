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
        Schema::create('info', function (Blueprint $table) {
            $table->id();
            $table->LongText('description')->nullable();
            $table->string('logo')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('currency')->nullable();
            $table->string('website_url')->nullable();
            $table->string('facebook')->nullable();
            $table->string('instgram')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('youtube')->nullable();
            $table->string('snapshat')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('google_buss')->nullable();
            $table->string('trustpilot_link')->nullable();
            $table->string('wifi_pass')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('facebook_pixel')->nullable();
            $table->string('tiktok_pixel')->nullable();
            $table->string('ads_pixel')->nullable();
            $table->string('anylytics')->nullable();
            $table->foreignId('resto_id')->nullable()->constrained('restos')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('info');
    }
};
