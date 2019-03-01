@echo off
for /f %%i in ('dir /b /s /a-d *run.bat') do (
    cd %%~dpi 
    REM start cmd /k "npm run build"
    npm run build
    echo "finish"
)
pause
REM 批量在存在run.bat的目录里执行npm run build命令