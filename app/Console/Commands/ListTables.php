<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
class ListTables extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:list-tables';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List all tables in the database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        $schemaName = env('DB_DATABASE'); // Your database name
        $tables = DB::select("SHOW TABLES LIKE '%'");
        
        $this->info("Tables in database '$schemaName':");
        foreach ($tables as $table) {
            foreach ($table as $key => $value)
                $this->line($value);
        }
    }
}
