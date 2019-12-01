<?php

/* @var $factory Factory */

use Faker\Generator as Faker;
use App\Post;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Post::class, static function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(5),
        'price' => $faker->numberBetween(1000, 10000),
		'quantity' => $faker->numberBetween(1,10),
        'store_id' => $faker->numberBetween(1, 5),
        'category_id' => $faker->numberBetween(1, 5),
    ];
});
