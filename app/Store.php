<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use App\Observers\StoreObserver;
use App\Http\Filters\RegisterFilters;

class Store extends Model
{
	use RegisterFilters;

    protected $guarded = [];

	protected $casts = [
		'email_verified_at' => 'datetime',
        'phone' => 'object',
        'user_id'=> 'integer'
	];

	public static function boot(): void
	{
		parent::boot();
		self::observe(StoreObserver::class);
	}

    public function picture(): MorphOne
    {
        return $this->morphOne(Picture::class,'imageable');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
