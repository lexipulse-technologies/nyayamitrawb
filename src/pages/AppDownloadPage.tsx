import { ApkDownloadCard } from '../components/ApkDownloadCard';

export function AppDownloadPage() {
  const VERSION = '1.0.1';
  // GitHub Release download URL
  const APK_URL = 'https://github.com/lexipulse-technologies/nyayamitrawb/releases/download/v1.0.1/NyayaMitra-v1.0.1.apk';

  return (
    <section className="py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <ApkDownloadCard
          apkUrl={APK_URL}
          version={VERSION}
        />
      </div>
    </section>
  );
}