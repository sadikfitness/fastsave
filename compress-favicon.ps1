Add-Type -AssemblyName System.Drawing

$faviconPath = Join-Path -Path $PWD -ChildPath "favicon.png"
$newFaviconPath = Join-Path -Path $PWD -ChildPath "favicon-optimized.png"

if (Test-Path $faviconPath) {
    Write-Host "Found favicon.png. Compressing..." -ForegroundColor Cyan
    $img = [System.Drawing.Image]::FromFile($faviconPath)
    
    # Target size for a favicon is usually 64x64 or 32x32
    $targetSize = 64
    
    $bmp = New-Object System.Drawing.Bitmap $targetSize, $targetSize
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    
    # High-quality resizing
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.DrawImage($img, 0, 0, $targetSize, $targetSize)
    
    # Save the optimized version
    $bmp.Save($newFaviconPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graph.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    
    $oldSize = (Get-Item $faviconPath).Length / 1KB
    $newSize = (Get-Item $newFaviconPath).Length / 1KB
    
    Write-Host "Success! Favicon resized from $([math]::Round($oldSize, 2)) KB to $([math]::Round($newSize, 2)) KB." -ForegroundColor Green
    Write-Host "Please delete the old 'favicon.png' and rename 'favicon-optimized.png' to 'favicon.png'." -ForegroundColor Yellow
} else {
    Write-Host "favicon.png not found in the current directory." -ForegroundColor Red
}
