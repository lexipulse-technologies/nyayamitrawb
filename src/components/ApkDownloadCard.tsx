import { Download, AlertTriangle } from 'lucide-react';
import { trackApkDownload } from '../utils/analytics';

interface ApkDownloadCardProps {
  apkUrl: string;
  version: string;
}

export function ApkDownloadCard({ apkUrl, version }: ApkDownloadCardProps) {
  const handleDownload = () => {
    trackApkDownload(version, apkUrl);
    window.open(apkUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-md">
      {/* Warning Banner */}
      <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h2 className="font-bold text-amber-950 text-base">Installation Required</h2>
          <p className="text-sm text-amber-900 mt-1 leading-relaxed">
            Enable <strong>"Install unknown apps"</strong> for your browser in Android Settings →
            Apps → [Your Browser] → Install unknown apps.
          </p>
        </div>
      </div>

      {/* Version Info */}
      <div className="text-center text-sm">
        <span className="text-slate-500 font-medium">Version</span>
        <p className="font-mono font-bold text-slate-900 mt-1">{version}</p>
      </div>

      {/* Download Button */}
      <button
        type="button"
        onClick={handleDownload}
        className="w-full py-4 md:py-5 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#0a1e34] to-[#0f2b48] rounded-xl hover:from-[#0f2b48] hover:to-slate-800 transition flex items-center justify-center gap-3 shadow-lg cursor-pointer"
      >
        <Download className="w-6 h-6" />
        Download NyayaMitra.apk
      </button>
    </div>
  );
}