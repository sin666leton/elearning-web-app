<?php

namespace App\Modules\Shared\Utils;

use Illuminate\Contracts\Validation\Validator;

trait ValidationErrorFormatter
{
    /**
     * Normalisasi pesan error
     * 
     * @param Validator $validator
     * @return array
     */
    private function formatError(Validator $validator)
    {
        return collect($validator->errors()->messages())
            ->map(fn($messages) => $messages[0])
            ->toArray();
    }
}