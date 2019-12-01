<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Requests\v1\UserCreateRequest;
use App\Http\Requests\v1\UserUpdateRequest;
use App\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\UsersResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store','update','destroy']);
    }

    public function index(): AnonymousResourceCollection
    {
        $users = User::latest()->with('store.posts.category', 'picture')->paginate(50);
        return UsersResource::collection($users);
    }

    public function store(UserCreateRequest $request): UsersResource
    {
    	$this->authorize('create', User::class);
        $request->merge([
            'password' => Hash::make($request['password']),
            'role' => $request['role'] ?: 0
        ]);
        $user = User::create($request->only(['name','email','password','phone','role']));
		if($request->image){
			$params = [
				'image' => $request->image,
				'object' => $user,
				'path' => 'images/users/'
			];
			event(new NewSingleImageUploadedEvent($params));
		}
        return new UsersResource($user);
    }

    public function show(User $user): UsersResource
    {
    	$user = User::where('id',$user->id)->with('store.posts.category', 'picture')->first();
        return new UsersResource($user);
    }

    public function update(UserUpdateRequest $request, User $user): UsersResource
    {
		$this->authorize('update', $user);
        $request->merge([
            'role' => $request['role'] ?: $user->role,
        ]);
        $user->update($request->only(['name','email','phone','role']));
        if($request->password){
            $user->update(['password' => Hash::make($request['password'])]);
        }
		if($request->image){
			$params = [
				'image' => $request->image,
				'object' => $user,
				'path' => 'images/users/'
			];
			event(new NewSingleImageUploadedEvent($params));
		}
        return new UsersResource($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $this->authorize('delete', $user);
		if($user->delete()){
            return response()->json(['success' => 'true']);
        }
        return response()->json(['error' => 'Error deleting user'],422);
    }
}
