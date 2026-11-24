import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const VERSION = '1.0.0';
const apkSource = 'android/app/build/outputs/apk/debug/app-debug.apk';
const apkDir = 'public/app';
const apkDest = path.join(apkDir, `NyayaMitra-v${VERSION}.apk`);
const checksumDest = path.join(apkDir, `NyayaMitra-v${VERSION}.apk.sha256`);

if (!fs.existsSync(apkSource)) {
  console.warn('⚠️  Source APK not found — skipping APK copy (expected on CI/Vercel without Android build).');
  console.warn('   Run locally: npm run build && npx cap sync android && cd android && ./gradlew assembleDebug');
  process.exit(0);
}

const buffer = fs.readFileSync(apkSource);
const hash = crypto.createHash('sha256').update(buffer).digest('hex');

fs.mkdirSync(apkDir, { recursive: true });
fs.writeFileSync(apkDest, buffer);
fs.writeFileSync(checksumDest, hash);

console.log(`✅ APK copied: ${apkDest}`);
console.log(`✅ SHA-256: ${hash}`);
console.log(`✅ Size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);