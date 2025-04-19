<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
{{-- <html> --}}
    
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- SEO Meta Tags -->
    <!-- SEO Meta Tags -->
    <meta name="description"
        content="DevCoders is a software company specializing in modern, scalable web & mobile applications using Laravel, Vue.js, and cutting-edge tech.">
    <meta name="keywords"
        content="DevCoders, Web Development, Laravel, Vue.js, Software Solutions, Mobile Apps, Full-Stack, SaaS, Tech Company">
    <meta name="author" content="DevCoders">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://thedevcoders.com/">
    <meta property="og:title" content="DevCoders | Code That Brings Ideas to Life">
    <meta property="og:description"
        content="From idea to deployment — we build high-performance software using Laravel and Vue.js.">
    <meta property="og:image" content="{{asset('og-tag-image.png')}}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="From idea to deployment — we build high-performance software using Laravel and Vue.js.">
    <meta name="twitter:url" content="https://thedevcoders.com/">
    <meta name="twitter:title" content="DevCoders | Code That Brings Ideas to Life">
    <meta name="twitter:description"
        content="Modern software development company building Laravel & Vue.js solutions for startups and businesses.">
    <meta name="twitter:image" content="{{asset('og-tag-image.png')}}">
    
    <!-- Favicon (optional, but recommended) -->
    
    <link rel="icon" href="{{ asset('devcoders-favicon.ico') }}">


    
    <!-- Theme Color (for mobile browsers) -->
    <meta name="theme-color" content="#0f172a">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/elvalle?styles=95341" rel="stylesheet">
    
    
    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
