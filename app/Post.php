<?php

namespace App;

use App\Observers\PostObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Post extends Model
{
    protected $guarded = [];

	public static function boot(): void
	{
		parent::boot();
		self::observe(PostObserver::class);
	}

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function pictures(): MorphMany
    {
        return $this->morphMany(Picture::class,'imageable');
    }
}
