<!-- app/views/eloquent.blade.php -->
@extends('welcome')

@section('content')
<div class="col-sm-8 col-sm-offset-2">

    <!-- BEARS -->
    <!-- loop over the bears and show off some things -->
    @foreach ( $bears as $bear )

        <!-- GET OUR BASIC BEAR INFORMATION -->
        <h2>{{ $bear->name }} <small>{{ $bear->type }}: Level {{ $bear->danger_level }}</small></h2>

        <!-- SHOW OFF THE TREES -->
        <h4>Trees</h4>
        @foreach ( $bear->trees as $tree ) 
            <p>{{ $tree->type }}</p>
        @endforeach

        <!-- SHOW OFF THE PICNICS -->
        <h4>Picnics</h4>
        @foreach ( $bear->picnics as $picnic )
            <p>{{ $picnic->name }}: Taste Level {{ $picnic->taste_level }}</p>
        @endforeach 

    @endforeach

</div>
@endsection