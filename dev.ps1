Set-Location "C:\Agent-OS\realtor-ai-booking"
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
& "C:\Program Files\nodejs\npm.cmd" run dev -- --port 3000
