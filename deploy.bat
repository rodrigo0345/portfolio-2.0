@echo off
setlocal enabledelayedexpansion

:: 1. Cleanup
if exist dist (
    rd /s /q dist
)

:: 2. Build
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Build failed.
    exit /b %ERRORLEVEL%
)

:: 3. Enter dist
pushd dist

:: 4. Setup CNAME
echo rodrigocasanova.space>CNAME

:: 5. Git Logic
git init
git add -A
git commit -m "deploy"

:: We use HEAD:gh-pages so it works whether your local branch is called 'main' or 'master'
git push -f git@github.com:rodrigo0345/portfolio-2.0.git HEAD:gh-pages

:: Check if the push actually worked
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Git push failed. Check your SSH keys or repository permissions.
    popd
    pause
    exit /b %ERRORLEVEL%
)

popd
echo.
echo Deployment complete successfully!
pause