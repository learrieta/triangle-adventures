import { mkdirSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'
import { spawnSync } from 'node:child_process'

const input = 'src/assets/Home/tal.mp4'
const output = 'public/videos/tal-mobile.mp4'
const poster = 'public/images/hero-mobile-poster.jpg'

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function ensureFfmpeg() {
  const result = spawnSync('ffmpeg', ['-version'], {
    stdio: 'ignore',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    console.error('ffmpeg is required before creating the mobile hero video.')
    console.error('Windows install option: winget install Gyan.FFmpeg')
    console.error('Then close and reopen PowerShell, and run npm run video:mobile-hero again.')
    process.exit(1)
  }
}

if (!existsSync(input)) {
  console.error(`Could not find ${input}.`)
  console.error('If you use Git LFS, run: git lfs pull')
  process.exit(1)
}

ensureFfmpeg()
mkdirSync(dirname(output), { recursive: true })
mkdirSync(dirname(poster), { recursive: true })

run('ffmpeg', [
  '-y',
  '-i', input,
  '-t', '12',
  '-vf', 'scale=720:-2,fps=24',
  '-an',
  '-c:v', 'libx264',
  '-preset', 'veryslow',
  '-crf', '30',
  '-movflags', '+faststart',
  output,
])

run('ffmpeg', [
  '-y',
  '-ss', '00:00:01',
  '-i', input,
  '-frames:v', '1',
  '-vf', 'scale=720:-2',
  '-q:v', '4',
  poster,
])

console.log(`Created ${output}`)
console.log(`Created ${poster}`)
