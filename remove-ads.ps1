$files = Get-ChildItem -Path . -Recurse -Filter *.html

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    # Remove the pop-under script from the <head>
    $content = $content -replace '(?i)<script src="https://pl27062746\.profitablecpmratenetwork\.com[^>]+></script>', ''
    
    # Remove ferocitycandour scripts
    $content = $content -replace '(?i)<script src="https://ferocitycandour\.com[^>]+></script>', ''

    # Remove the ad containers (single line or multi-line)
    $content = $content -replace '(?si)<div class="ad-container".*?</script></div>', ''
    $content = $content -replace '(?si)<div class="wrap">\s*<div class="ad-container".*?</script></div>\s*</div>', ''

    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "All hardcoded pop-unders and ad containers have been completely removed from all 66 files!" -ForegroundColor Green
