<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\UserPasswordUpdateRequest;
use App\Http\Resources\v1\UsersResource;
use App\Http\Requests\v1\UserCreateRequest;
use App\Http\Requests\v1\UserLoginRequest;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['index', 'password']);
    }

    public function index(): UsersResource
    {
        $user = auth('api')->user();
        return new UsersResource($user);
    }

    public function password(UserPasswordUpdateRequest $request): JsonResponse
	{
		auth('api')->user()->update(['password' => $request['password']]);
		return response()->json(['data' => 'true']);
	}

    public function login(UserLoginRequest $request): JsonResponse
    {
        if(auth()->attempt(['email' => $request['email'], 'password' => $request['password']])){
            return response()->json([ 'data' => auth()->user()->passport_token ]);
        }
        return response()->json(['password' => trans('auth.failed')],422);
    }

    public function register(UserCreateRequest $request): JsonResponse
    {
        $user = User::create($request->except(['password_confirmation']));
        auth()->login($user);
        return response()->json([ 'data' => $user->passport_token ]);
    }
}
