$headSnippet = @"
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNWBQ39B');</script>
<!-- End Google Tag Manager -->
"@

$bodySnippet = @"
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNWBQ39B"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
"@

$files = Get-ChildItem -Path "d:\YouTube Auto\ytmaster" -Filter *.html -Recurse

foreach ($file in $files) {
    # Read file content using UTF8 to avoid charset issues
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $modified = $false

    if ($content -notmatch 'GTM-TNWBQ39B') {
        # Insert after <head>
        if ($content -match '(?i)<head>') {
            $content = $content -replace '(?i)(<head>)', "`$1`n$headSnippet"
            $modified = $true
        }
        
        # Insert after <body>
        if ($content -match '(?i)<body>') {
            $content = $content -replace '(?i)(<body>)', "`$1`n$bodySnippet"
            $modified = $true
        }
        
        if ($modified) {
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            Write-Host "Added GTM tags to: $($file.Name)"
        }
    } else {
        Write-Host "GTM tags already present in: $($file.Name)"
    }
}

Write-Host "`nAll HTML files have been successfully updated with the GTM tags!"
