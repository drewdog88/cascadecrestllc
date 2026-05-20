# Clone or move cascadecrestllc into D:\Gitlocal (Windows)
# Run in PowerShell:  Set-ExecutionPolicy -Scope Process Bypass; .\scripts\setup-gitlocal.ps1

$ErrorActionPreference = "Stop"
$RepoName = "cascadecrestllc"
$RepoUrl = "https://github.com/drewdog88/cascadecrestllc.git"
$GitLocal = "D:\Gitlocal"
$Target = Join-Path $GitLocal $RepoName
$DocumentsSource = Join-Path $env:USERPROFILE "Documents\$RepoName"

if (-not (Test-Path $GitLocal)) {
    Write-Host "Creating $GitLocal ..."
    New-Item -ItemType Directory -Path $GitLocal -Force | Out-Null
}

if (Test-Path $Target) {
    Write-Host "Already exists: $Target"
    Set-Location $Target
    git pull origin main
    Write-Host "Updated from GitHub."
} elseif (Test-Path $DocumentsSource) {
    Write-Host "Moving $DocumentsSource -> $Target ..."
    Move-Item -Path $DocumentsSource -Destination $Target
    Set-Location $Target
} else {
    Write-Host "Cloning into $Target ..."
    Set-Location $GitLocal
    git clone $RepoUrl $RepoName
    Set-Location $Target
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Running npm install ..."
    npm install
}

Write-Host ""
Write-Host "Ready at: $Target"
Write-Host "Open in Cursor: File -> Open Folder -> $Target"
Write-Host "Or run:  cd `"$Target`"; cursor ."
Write-Host ""

if (Get-Command cursor -ErrorAction SilentlyContinue) {
    $open = Read-Host "Open in Cursor now? (y/n)"
    if ($open -eq "y") {
        cursor .
    }
}
