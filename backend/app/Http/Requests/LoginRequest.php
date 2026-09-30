<?php

namespace App\Http\Requests;

use App\Modules\Shared\Utils\ValidationErrorFormatter;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    use ValidationErrorFormatter;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    public function attributes()
    {
        return [
            'email' => 'Email',
            'password' => 'Password'
        ];
    }

    public function messages()
    {
        return [
            'required' => ':attribute tidak boleh kosong',
            'email' => ':attribute tidak valid',
            'string' => ':attribute tidak valid'
        ];
    }

    /**
     * Override failed validation to return custom JSON format.
     */
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        throw new \Illuminate\Http\Exceptions\HttpResponseException(response()->json([
            'error' => $this->formatError($validator),
            'code' => 'VALIDATION_ERROR'
        ], 422));
    }
}
