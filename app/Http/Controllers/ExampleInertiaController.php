<?php

namespace App\Http\Controllers;

use App\Helpers\FileUploadHelper;
use App\Http\Requests\CreateUpdateExampleRequest;

use App\Models\Example;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Laravel\Jetstream\Jetstream;

class ExampleInertiaController extends Controller
{
    private $directory_name = 'Examples';

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        if (request()->wantsJson()) {
            return $this->getExampleList();
        }
        return Inertia("Admin/Examples/index", []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUpdateExampleRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('uploaded_avatar'))
            $data['avatar'] = FileUploadHelper::upload_file($request->file('uploaded_avatar'), $this->directory_name);


        $example = Example::create($data);
        return redirect()->route('Examples.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Example $example)
    {
        if (request()->wantsJson()) {
            return $example;
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Example $example)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CreateUpdateExampleRequest $request, Example $example)
    {
        $data = $request->validated();
        if ($request->hasFile('uploaded_avatar'))
            $data['avatar'] = FileUploadHelper::upload_file($request->file('uploaded_avatar'), $this->directory_name);


        $updated_example = $example->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Example $example)
    {
        $example->delete();
    }

    private function getExampleList()
    {
        $columns = Schema::getColumnListing('examples');
        $query = Example::query();

        if (request('sort_by_key'))
            $query->orderBy(request('sort_by_key'), request('sort_by_order') ?? "asc");

        foreach ($columns as $column) {
            if ($column == 'created_at' || $column == 'updated_at' || $column == 'id') continue;
            $query->orWhere($column, 'LIKE', '%' . request('search') . '%');
        }

        return $query->paginate(request('per_page') >= 0 ? request('per_page') : Example::count());
    }
}
