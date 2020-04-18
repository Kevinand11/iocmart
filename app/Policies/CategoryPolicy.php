<?php

namespace App\Policies;

use App\Category;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Category $category): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
		return $user->isAdmin();
    }

    public function update(User $user, Category $category): bool
    {
		return $user->isAdmin();
    }

    public function delete(User $user, Category $category): bool
    {
		return $user->isAdmin();
    }

    public function restore(User $user, Category $category): bool
    {
		return $user->isAdmin();
    }

    public function forceDelete(User $user, Category $category): bool
    {
		return $user->isAdmin();
    }
}
