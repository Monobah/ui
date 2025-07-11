<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use App\Models\Review;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Layout;
use Illuminate\Support\Str;

class ProductReviewsScreen extends Screen {
    public function query(): iterable {
        return ['reviews' => Review::paginate(10)];
    }

    public function name(): ?string {
        return 'Reviews';
    }

    public function commandBar(): iterable {
        return [];
    }

    public function layout(): iterable {
        return [
            Layout::table('reviews', [
                TD::make('customer_name', 'Name')->width(250),
                TD::make('product_name', 'Product')->width(200),
                TD::make('comment', 'Comment')->width('450')->render(function (Review $review) {
                    return Str::limit($review->comment, 120);
                }),
                TD::make('rating', 'Rating')->width(100),
            ])
        ];
    }
}
