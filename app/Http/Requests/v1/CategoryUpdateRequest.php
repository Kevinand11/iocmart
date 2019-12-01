<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class CategoryUpdateRequest extends FormRequest
{
    public function authorize():bool
    {
		return true;
    }

    public function rules():array
    {
		$category = $this->route()->parameter('category');
        return [
			'name' => 'required|string|min:3|unique:categories,name,'.$category->name,
			'parent_id' => 'numeric|required'
        ];
    }
}
