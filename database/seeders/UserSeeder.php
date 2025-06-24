<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table('users')->insert([
        //     'name' => 'Sandra',
        //     'email' => 'sandra.oalht@gmail.com',
        //     'password' => bcrypt('OAL_1234'),
        // ]);

        // DB::table('users')->insert([
        //     'name' => 'Yolanda',
        //     'email' => 'orienta1@oalhuetortajar.com',
        //     'password' => bcrypt('OAL_12345'),
        // ]);

        // DB::table('users')->insert([
        //     'name' => 'AiramSandra',
        //     'email' => 'a@a.com',
        //     'password' => bcrypt('OAL_12345'),
        // ]);

        // DB::table('users')->insert([
        //     'name' => 'Carolina',
        //     'email' => 'carolina.oalht@gmail.com',
        //     'password' => bcrypt('OAL_12345'),
        // ]);

         DB::table('users')->insert([
             'name' => 'Susana',
             'email' => 'susana.orienta@huetortajar.com',
             'password' => bcrypt('OAL_12345'),
         ]);
    }
}
